import React, {useEffect} from "react";
import {useLocalStorage} from "./hooks";
import {Maybe, UserProfileFragment} from "./generated/types";

export type JwtToken = string;

export type Profile = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
};

export type JwtTokenPayload = {
    sub: string;
    roles: string[];
    iss: string;
    exp: Date;
    iat: Date;
}

export type UserAuthentication = {
    token: Maybe<JwtToken>;
    payload: Maybe<JwtTokenPayload>;
    profile: Maybe<UserProfileFragment>,
    hasRole(role: string): boolean;
    login(token: string, profile: UserProfileFragment): void;
    logout(): void;
};

export const AuthContext = React.createContext<UserAuthentication>({
    token: null,
    payload: null,
    profile: null,
    hasRole() { return false; },
    login() { console.warn("Missing auth provider."); },
    logout() { console.warn("Missing auth provider."); }
});

type AuthProviderProps = {
    children?: React.ReactNode
}

const parseJwtToken = (token: JwtToken): JwtTokenPayload => {
    const [header, payload, signature] = token.split(".");
    const decoded = atob(payload);
    const json = JSON.parse(decoded);
    json.exp = new Date(json.exp * 1000);
    json.iat = new Date(json.iat * 1000);
    return json;
}

export default function AuthProvider(props: AuthProviderProps) {
    const { children } = props;
    const [token, setToken] = useLocalStorage<string | null>("token", null);
    const [profile, setProfile] = useLocalStorage<UserProfileFragment | null>("profile", null);
    const payload = token ? parseJwtToken(token) : null;
    const auth: UserAuthentication = {
        token,
        payload,
        profile,
        hasRole: (role: string) => {
            return payload ? payload.roles.includes('ROLE_' + role) : false;
        },
        login: (token, profile) => {
            setToken(token);
            setProfile(profile);
        },
        logout: () => {
            setToken(null);
            setProfile(null);
        }
    };

    useEffect(() => {
        const exp = payload?.exp;
        if (exp) {
            console.log(exp);
            const ms = exp.getTime() - new Date().getTime()
            console.log(`Clearing session after ${ms}ms`)
            const timer = setTimeout(() => {
                setToken(null);
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
