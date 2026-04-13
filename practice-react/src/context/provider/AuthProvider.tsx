//provider provides the data to all the component we want

import { type ReactNode, useState } from "react";
import AuthContext from "../AuthContext";
import type { ICredentials, IUserDetail } from "../../components/auth/Auth.contract";
import Cookies from "js-cookie";
import axiosInstance from "../../config/ApiClient";

export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [authUser, setAuthUser] = useState<IUserDetail | null>(null);
    const getloggedInUser = async () => {
        try {
            const loggedInUser = await axiosInstance.get("auth/me") as IUserDetail
            setAuthUser(loggedInUser)
            return loggedInUser

        } catch (exception) {
            console.log(exception)
        }
    }


    const login = async (credentials: ICredentials): Promise<IUserDetail | void> => {
        try {
            const response = await axiosInstance.post('auth/login', {
                ...credentials,
                expiresIn: 24 * 60
            }) as { accessToken: string }
            Cookies.set("Auth_Key_61", response.accessToken, {           //--> iniside this {} configuration(i.e config)
                expires: 1,
                sameSite: "Lax",
                secure: true
            })
            return await getloggedInUser()
            // return await getloggedInUser()  //we cannot return bcz we have declare login func as void in AuthContext

        } catch (exception) {
            console.log(exception)
            throw exception
        }

    }


    return (<AuthContext.Provider value={       //provider provides the data/method from this value=...
        {
            login: login,
            authUser: authUser                      //we implement the func login created in the AuthContext 
        }
    }>
        {children}
    </AuthContext.Provider>
    )
}