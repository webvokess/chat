"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


interface userData {
    name: string,
    email: string,
    chatId: string,
    savedContacts: { name: string, email: string, id: string }[]
}
const UserContext = createContext<any>(undefined);

export function UserWrapper({ children }: {
    children: React.ReactNode;
}) {
    let [user, setUser] = useState<userData>({
        name: "",
        email: "",
        chatId: "",
        savedContacts: []
    });

    useEffect(() => {
        axios.get("/api/user/getMe").then((data) => setUser(data.data))
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext);
}