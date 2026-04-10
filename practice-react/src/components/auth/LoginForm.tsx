import { TextInput } from "../ui/form/Input"
import { FormLabel } from "../ui/form/Label"
import { LoginSchema, type ICredentials } from "./Auth.contract"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CancelButton, SubmitButton } from "../ui/button/Button"

export default function LoginForm() {
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
            console.log(Credentials)
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
                        type="email"
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