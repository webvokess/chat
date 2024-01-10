"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


interface userData {
    name: string,
    email: string,
    chatId: string,
    savedContacts: { name: string, email: string, id: string }[]
}
const UserContext = createContext<any>({});

export function UserWrapper({ children }: {
    children: React.ReactNode;
}) {
    let [user, setUser] = useState<userData>({
        name: "",
        email: "",
        chatId: "",
        savedContacts: []
    });
    const fetchUser = async () => {
        console.log('here')
        axios.get("/api/user/getMe").then((data) => setUser(data.data)).catch((e) => setUser({
            name: "",
            email: "",
            chatId: "",
            savedContacts: []
        }))
    }

    useEffect(() => {
        fetchUser()
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