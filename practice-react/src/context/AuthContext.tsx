import { createContext } from "react";
import type { ICredentials, IUserDetail } from "../components/auth/Auth.contract";


export interface IAuthContext {
    login(credentials: ICredentials): Promise<void | IUserDetail>
    authUser: IUserDetail | null
    getloggedInUser(): Promise<void | IUserDetail>,
    authloading: boolean
}

const AuthContext = createContext<IAuthContext>({     //uses createContext func and uses arg to transfer data/func ,context is the combination of data and func
    //data
    //method
    async login() { },
    authloading: true,                                 //default value is true
    authUser: null,                                   //default value is null
    async getloggedInUser() { }                        //usually we define func here and define it in the Provider
})

export default AuthContext 