//provider provides the data to all the component we want

import { type ReactNode, useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import type { ICredentials, IUserDetail } from "../../components/auth/Auth.contract";
import Cookies from "js-cookie";
import axiosInstance from "../../config/ApiClient";
import Loading from "../../components/ui/Loading/Loading";

export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [authUser, setAuthUser] = useState<IUserDetail | null>(null);     //default value is null
    const [authloading, setauthloading] = useState<boolean>(true);


    const getloggedInUser = async () => {
        try {
            const loggedInUser = await axiosInstance.get("auth/me") as IUserDetail
            setAuthUser(loggedInUser)
            return loggedInUser

        } catch (exception) {
            console.log(exception)
        }
        finally {
            setauthloading(false)

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
            // return await getloggedInUser()  //we cannot return bcz we have declare login func as void in AuthContext before , so after we declare we can do return , if not return we can also simply write awati getloggedInUser

        } catch (exception) {
            console.log(exception)
            throw exception
        }

    }


    useEffect(() => {
        return () => {
            const token = Cookies.get("Auth_Key_61");
            if (token) {
                getloggedInUser()
            } else {
                setauthloading(false)
            }
        }
    }, [])


    return authloading ?
        (
            // <>Loading</>
            <section className="w-full h-screen flex items-center justify-center">
                <Loading />
            </section>
        )
        :
        (<AuthContext.Provider value={       //provider provides the data/method from this value=...
            {
                login: login,
                authUser: authUser,                      //we implement the func login created in the AuthContext 
                getloggedInUser: getloggedInUser,
                authloading: authloading                  //key is authloading and its value will came from above useState hook declaration  
            }
        }>
            {children}
        </AuthContext.Provider>
        )
}