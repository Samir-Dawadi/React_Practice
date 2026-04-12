import { createContext } from "react";
import type { ICredentials } from "../components/auth/Auth.contract";


export interface IAuthContext {
    login(credentials: ICredentials): Promise<void>
}

const AuthContext = createContext<IAuthContext>({     //uses createContext func and uses arg to transfer data/func
    //data
    //method
    async login() { }                                 //usually we define func here and define it in the Provider
})

export default AuthContext 