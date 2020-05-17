import React, {useEffect} from "react";
import {useLocalStorage} from "./hooks";

export type JwtToken = string;

export type UserProfile = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
};

export type UserSession = {
    token: JwtToken;
    user: UserProfile;
};

export type JwtTokenPayload = {
    sub: string;
    roles: string[];
    iss: string;
    exp: Date;
    iat: Date;
}

export type UserAuthentication = {
    token?: JwtToken;
    payload?: JwtTokenPayload;
    user?: UserProfile;
    login(user: UserSession): void;
    logout(): void;
};

export const AuthContext = React.createContext<UserAuthentication>({
    login() { console.warn("Missing auth provider."); },
    logout() { console.warn("Missing auth provider."); }
});

type AuthProviderProps = {
    children?: React.ReactNode
}

const parseJwtToken = (token: JwtToken): JwtTokenPayload => {
    const [header, payload, signiture] = token.split(".");
    const decoded = atob(payload);
    const json = JSON.parse(decoded);
    json.exp = new Date(json.exp * 1000);
    json.iat = new Date(json.iat * 1000);
    return json;
}

export default function AuthProvider(props: AuthProviderProps) {
    const { children } = props;
    const [session, setSession] = useLocalStorage<UserSession | null>("session", null);
    const payload = session ? parseJwtToken(session.token) : undefined;
    const auth: UserAuthentication = {
        token: session?.token,
        payload,
        user: session?.user,
        login: (userSession) => {
            setSession(userSession)
        },
        logout: () => {
            setSession(null)
        }
    };

    useEffect(() => {
        const exp = payload?.exp;
        if (exp) {
            console.log(exp);
            const ms = exp.getTime() - new Date().getTime()
            console.log(`Clearing session after ${ms}ms`)
            const timer = setTimeout(() => {
                setSession(null);
            }, ms);
            return () => clearTimeout(timer);
        }
    }, [payload]);

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}
