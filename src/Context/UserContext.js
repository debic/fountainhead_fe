import React from 'react';
import { useContext, createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

export function useUserContext() {
    return useContext(UserContext);
}

export default function UserContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || '');
    const validate = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/user/validate", { withCredentials: true });
            setCurrentUser(res.data.user);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <UserContext.Provider value={{ validate, setCurrentUser, currentUser }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}
