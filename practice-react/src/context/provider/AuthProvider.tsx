//provider provides the data to all the component we want

import type { ReactNode } from "react";
import AuthContext from "../AuthContext";
import type { ICredentials } from "../../components/auth/Auth.contract";


export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {

    const login = async (credentials: ICredentials) => {
        console.log(credentials)
    }


    return (<AuthContext.Provider value={       //provider provides the data/method from this value=...
        {
            login: login                        //we implement the func login created in the AuthContext 
        }
    }>
        {children}
    </AuthContext.Provider>
    )
}