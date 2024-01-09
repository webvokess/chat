"use client";

import { createContext, useContext, useState } from "react";


interface userData{
    name:string,
    email:string,
    chatId:string,
}
const AppContext=createContext<any>(undefined);

export function AppWrapper({children}:{
    children:React.ReactNode;
}){
    let [user,setUser]=useState<userData>(
        {
            name:'Harsh',
            email:'harshtrivs@gmail.com',
            chatId:'12udnjfshdjismd',
        }
    );
    return (
        <AppContext.Provider value={{user,setUser}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}