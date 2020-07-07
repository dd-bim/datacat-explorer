import React, {useContext} from "react";
import {useProfileQuery, UserProfileFragment} from "./generated/types";
import useAuthContext from "./hooks/useAuthContext";

export const ProfileContext = React.createContext<UserProfileFragment | null>(null);

export function useProfile() {
    return useContext(ProfileContext);
}

export default function ProfileProvider({children}: { children: React.ReactNode }) {
    const {token} = useAuthContext();
    const {data} = useProfileQuery({
        skip: !token
    });

    return (
        <ProfileContext.Provider value={data?.profile ?? null}>
            {children}
        </ProfileContext.Provider>
    );
}
