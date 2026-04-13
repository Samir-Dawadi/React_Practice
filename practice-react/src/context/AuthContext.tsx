import { createContext } from "react";
import type { ICredentials, IUserDetail } from "../components/auth/Auth.contract";


export interface IAuthContext {
    login(credentials: ICredentials): Promise<void | IUserDetail>
    authUser: IUserDetail | null
}

const AuthContext = createContext<IAuthContext>({     //uses createContext func and uses arg to transfer data/func
    //data
    //method
    async login() { },
    authUser: null                               //usually we define func here and define it in the Provider
})

export default AuthContext 