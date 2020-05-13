import React from "react";

export interface UserSession {
    token: string;
    user: UserProfile
}

export interface UserProfile {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
    roles: string[];
}

export interface UserAuthentication {
    session: UserSession | null;
    login: (user: UserSession) => void;
    logout: () => void;
}

export const AuthContext = React.createContext<UserAuthentication>({
    session: null,
    login: () => {},
    logout: () => {}
});
