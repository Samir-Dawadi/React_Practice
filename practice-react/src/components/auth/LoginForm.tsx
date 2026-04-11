import { TextInput } from "../ui/form/Input"
import { FormLabel } from "../ui/form/Label"
import { LoginSchema, type ICredentials } from "./Auth.contract"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CancelButton, SubmitButton } from "../ui/button/Button"
import axiosInstance from "../../config/ApiClient"

// import Cookies from "js-cookie"
// import { useState } from "react"

export default function LoginForm() {

    //local state=>declared within component n cannot be shared with other 
    // const [Loading, setLoading] = useState<boolean>(true)

    //global state=> declared outside the component and can be shared with other components 
    // -context=> auto built in react , follows hirerachay ->top to bottom 
    // -redux=>toolkit
    //other also available as : zustand , jotai , tanstack query (api state)


    const { control, handleSubmit, formState: { errors } } = useForm<ICredentials>({   //control->for controlled component(eg form that can be edited/cannot be edited like chatgpt ma afno detail / name edit garna milni , default value haru edit garna milni)
        defaultValues: {
            username: "",
            password: ""
        },
        resolver: zodResolver(LoginSchema)
    })

    //defaultValues and resolver are the parameters of useForm 
    //formState - form ma gareko action ko state hunxa (submit action , if invalid vayo vani we pass errors as :formState: { errors } else we will receive the data from below login func code )
    // handleSubmit = “submit button click huda, pahila check gara (validation), ani matra data pathau”


    //const{credentials,setCredentials}=useState({
    //          username:"" , 
    //          password:""   
    //          })

    // const HandleInputChange = (e: BaseSyntheticEvent) => {
    //     const { name, value } = e.target;
    //     setCredentials({
    //         ...Credentials,
    //         [name]: value
    //     })
    // }

    // const login = async (e: BaseSyntheticEvent) => {
    //     try {
    //         e.preventDefault();
    //         await LoginSchema.parseAsync(Credentials)
    //     } catch (exception) {
    //         console.log(exception)
    //     }
    // }

    // console.log(errors)

    const login = async (Credentials: ICredentials) => {
        try {
            // let response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}auth/login`, {

            //     method: "POST",
            //     headers: { "Content-Type": " application/json " },                    // =>json format
            //     //headers;{"Content-Type:"multipart/form-data"}                         =>only for multiple file 
            //     //headers:{"Content-Type":"application/x-www-form-urlencoded"},         =>neither file nor json
            //     body: JSON.stringify(Credentials)
            // })

            // response = await response.json()   //in axios instead of this line:  responseType: "json",

            const response = await axiosInstance.post('auth/login', Credentials)
            console.log(response)
            console.log(response.data)



            // const response = {
            //     token: "afasdfdfdfdg4tert4tw4gtgwwert43"
            // }

            // per domain 50 cookies  ->per cookie 4096 ch ->if 1 ch is 1byte then 4096*1byte -> 4kb

            //js default

            // document.cookie = "token:"+response.token+"; ExpiresIn:"+ new Date()+"; path =/"


            // Cookies.set("token", response.token, {         //cookie name (i.e token) is respnose.token (token=response.token)
            //     path: "/",       //default
            //     expires: 1,   //day
            //     secure: true,  //https
            //     sameSite: "Lax"  //only allowed to work at same site , wont work at difrnt site 

            // })

            //cookie remove:
            // Cookies.remove("token");

            //cookie get:
            // const token = Cookies.get("token")
            // console.log(token)


            //LocalStorage->5MB , Non expiring , until we destroy or clear the cache of browser

            // localStorage.setItem("token", response.token);
            // localStorage.getItem("token")
            // localStorage.removeItem("token")            //remove key that is in the token
            // localStorage.clear()                        //clears all localstorage items



            //SessionStorage->same syntax and working mechanism as local storage , -> 5MB , and it is tab specific 
            // sessionStorage.setItem("token", response.token)
            // sessionStorage.getItem("token")
            // sessionStorage.removeItem("token")
            // sessionStorage.clear()


            // console.log(Credentials)
        } catch (exception) {
            console.log(exception)
        }
    }

    return (
        <form onSubmit={handleSubmit(login)} className="flex flex-col gap-5">

            <div className="flex w-full items-center">
                <FormLabel htmlFor="username">User Name:</FormLabel>
                <div className="w-2/3 flex flex-col gap-1">
                    <TextInput
                        errMsg={errors?.username?.message}
                        control={control}
                        type="text"
                        name="username"
                    />
                </div>
            </div>

            <div className="flex w-full items-center">
                <FormLabel htmlFor="password">Password</FormLabel>
                <div className="w-2/3 flex flex-col gap-1">
                    <TextInput
                        errMsg={errors?.password?.message}
                        control={control}

                        type="password"
                        name="password" />
                </div>
            </div>
            <div className="flex w-full items-center justify-end">
                <a

                    href="/forget-password"
                    className="text-teal-700 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96"
                >
                    Forgot password?
                </a>
            </div>
            <div className="flex w-full items-center gap-3">
                {/* <button type="reset" className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2">
                    Reset
                </button>
                <button type="submit" className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2">
                    Submit
                </button> */}
                <CancelButton>Reset</CancelButton>
                <SubmitButton>Submit</SubmitButton>
            </div>
        </form>
    )
}