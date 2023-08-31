import {createContext , useEffect, useState} from "react";
import axios from 'react'


export const AuthContext = createContext()


export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user"))|| null)

    const login = async(inputs)=>{
        const res = await axios.post("/auth/login",inputs);
        setCurrentUser(res.data)
    }
    const logout = async(inputs)=>{
        const res = await axios.post("/auth/logout",inputs);
        setCurrentUser(null);
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));

    },[currentUser]);
    return (
        <AuthContext.Provider value={{currentUser,login,logout}}>{children}</AuthContext.Provider>

    )
}