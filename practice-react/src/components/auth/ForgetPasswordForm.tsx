// import { useState } from "react"
import { LuSend, LuX } from "react-icons/lu";
import { CancelButton, SubmitButton } from "../ui/button/Button";
import { TextInput } from "../ui/form/Input"
import { FormLabel } from "../ui/form/Label"
import { ForgetPasswordSchema, type IUsername } from "./Auth.contract"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ForgetPasswordForm() {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<IUsername>({
        defaultValues: {
            username: ""
        },
        resolver: zodResolver(ForgetPasswordSchema)
    })

    
    console.log(errors);
    // const [Credentials, setCredentials] = useState<IUsername>({
    //     username: ""
    // })

    const login = async (Credential: IUsername) => {
        try {
            console.log(Credential)
        } catch (exception) {
            console.log(exception)
        }
    }

    return (
        <form onSubmit={handleSubmit(login)} className="flex flex-col gap-5">

            <div className="flex w-full items-center">
                <FormLabel htmlFor="username">User Name:</FormLabel>
                <div className="w-2/3 flex flex-col gap-1">
                    <TextInput type="email" name="username" control={control} errMsg={errors?.username?.message} />
                </div>
            </div>

            <div className="flex w-full items-center gap-3">
                {/* <button className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2">
                    Reset
                </button> */}
                {/* <button className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2">
                    Submit
                </button> */}

                <CancelButton className="flex gap-3" disabled={isSubmitting}> <LuX></LuX>  Reset</CancelButton>
                <SubmitButton className="flex gap-3" disabled={isSubmitting}> <LuSend></LuSend> Send Request</SubmitButton>
            </div>
        </form>
    )
}