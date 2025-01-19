import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
}

export const  AuthContextProvider = ({children}) =>{
    // localStorage.removeItem("user");

    const user = localStorage.getItem("user");
    const [authUser, setAuthUser] = useState(user? JSON.parse(user) : null)

    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>
}