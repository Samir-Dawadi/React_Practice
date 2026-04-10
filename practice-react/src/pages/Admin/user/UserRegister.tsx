// // import { useState, type BaseSyntheticEvent } from "react";
// import { FileInput, SelectOptionInput, TextArea, TextInput } from "../../../components/ui/form/Input";
// import { FormLabel } from "../../../components/ui/form/Label";
// import { H2 } from "../../../components/ui/typography/PageTitle";
// import { CancelButton, SubmitButton } from "../../../components/ui/button/Button";
// import { UserCreateSchema, type ICredentials } from "../../../components/auth/Auth.contract";
// // import { useForm } from "react-hook-form";
// // import type { ICredentials } from "../../../components/auth/Auth.contract";

// export default function UserRegistration() {

//     const { control, handleSubmit, formState: { errors } } = useForm<ICredentials>({
//         defaultValues: {
//             name: '',
//             email: '',
//             role: '',
//             address: '',
//             phone: '',
//             image: '',
//             submit: ''
//         },
//         resolver: zodResolver(UserCreateSchema)
//     })

//     // const [data, setdata] = useState({
//     //     name: '',
//     //     email: '',
//     //     role: '',
//     //     address: '',
//     //     phone: '',
//     //     image: '',
//     //     submit: ''

//     // })

//     // const handleChange = (e: BaseSyntheticEvent) => {
//     //     e.preventDefault();
//     //     const { name, value } = e.target;
//     //     setdata({
//     //         ...data,
//     //         [name]: value
//     //     })
//     // }

//     const handleFileChange = (name: string, file: File | Array<File>) => {
//         setdata({
//             ...data,
//             [name]: file
//         })
//     }

//     const login = async (Credential: ICredentials) => {
//         try {
//             console.log(Credential)
//         } catch (error) {
//             console.log(error)
//         }
//         // }

//         return (
//             <>
//                 <div className="bg-white w-full rounded-md flex p-5 flex-col gap-5">
//                     <div className="pb-5 border-b w-full border-teal-800/10">
//                         <H2>User Create</H2>
//                     </div>


//                     <form onClick={handleChange(login)} action="" className="flex flex-col gap-3">
//                         <div className="flex">
//                             <FormLabel htmlFor="name">Full Name:</FormLabel>
//                             <div className="w-2/3 flex flex-col">
//                                 <TextInput
//                                     name="name"
//                                     type="text"
//                                     control={Control}
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex">
//                             <FormLabel htmlFor="email">Email(Username):</FormLabel>
//                             <div className="w-2/3 flex flex-col">
//                                 <TextInput
//                                     name="email"
//                                     type="email"
//                                     handleChange={handleChange}
//                                 />
//                             </div>
//                         </div>


//                         <div className="flex">
//                             <FormLabel htmlFor="role">User Role:</FormLabel>
//                             <div className="w-2/3 flex flex-col">
//                                 <SelectOptionInput
//                                     options={[
//                                         { label: "Admin User", value: "admin" },
//                                         { label: "User", value: "user" }
//                                     ]}
//                                     name="role" handleChange={handleChange}></SelectOptionInput>
//                             </div>
//                         </div>


//                         <div className="flex">
//                             <FormLabel htmlFor="gender">Gender:</FormLabel>
//                             <div className="w-2/3 flex flex-col">
//                                 <SelectOptionInput
//                                     options={[
//                                         { label: " Male", value: "male" },
//                                         { label: "Female", value: "female" },
//                                         { label: "other", value: "other" },
//                                     ]}
//                                     name="role" handleChange={handleChange}></SelectOptionInput>
//                             </div>
//                         </div>


//                         <div className="flex">
//                             <FormLabel htmlFor="phone">Phone:</FormLabel>
//                             <div className="w-2/3 flex flex-col">
//                                 <TextInput
//                                     name="phone"
//                                     type="tel"
//                                     handleChange={handleChange}
//                                 />
//                             </div>
//                         </div>


//                         <div className="flex">
//                             <FormLabel htmlFor="address">Address:</FormLabel>
//                             <div className="w-2/3 flex flex-col">
//                                 <TextArea
//                                     name="address"
//                                     handleChange={handleChange}
//                                 />
//                             </div>
//                         </div>


//                         <div className="flex">
//                             <FormLabel htmlFor="address">Image:</FormLabel>
//                             <div className="w-2/3 flex flex-col">
//                                 <FileInput name="image" handleChange={handleFileChange} />
//                             </div>
//                         </div>

//                         <div className="w-full flex justify-end">
//                             <div className=" w-2/3 flex gap-3 ">
//                                 <CancelButton>Reset</CancelButton >

//                                 <SubmitButton>Register</SubmitButton>


//                             </div>
//                         </div>

//                     </form>
//                 </div>
//             </>
//         )
//     }
// }




import { useState, type BaseSyntheticEvent } from "react";
import { FileInput, SelectOptionInput, TextArea, TextInput } from "../../../components/ui/form/Input";
import { FormLabel } from "../../../components/ui/form/Label";
import { H2 } from "../../../components/ui/typography/PageTitle";
import { CancelButton, SubmitButton } from "../../../components/ui/button/Button";

export default function UserRegister() {
    const [data, setData] = useState({
        name: '',
        email: "",
        role: "",
        address: "",
        phone: "",
        image: ""
    })

    const handleChange = (e: BaseSyntheticEvent) => {
        e.preventDefault()
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    const handleFileChange = (name: string, file: File | Array<File>) => {
        setData({
            ...data,
            [name]: file,
        });
    };
    return (
        <>
            <div className="bg-white w-full rounded-md flex p-5 flex-col gap-5">
                <div className="w-full pb-3 border-b border-teal-800/10">
                    <H2>User Create</H2>
                </div>

                <form action="" className="flex flex-col gap-3">
                    <div className="flex">
                        <FormLabel htmlFor="name">Full name: </FormLabel>
                        <div className="w-2/3 flex flex-col">
                            <TextInput name="name" type="text" handleChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex">
                        <FormLabel htmlFor="email">Email(Username): </FormLabel>
                        <div className="w-2/3 flex flex-col">
                            <TextInput
                                name="email"
                                type="email"
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <FormLabel htmlFor="role">User Role: </FormLabel>
                        <div className="w-2/3 flex flex-col">
                            <SelectOptionInput
                                options={[
                                    { label: "Admin User", value: "admin" },
                                    { label: "User", value: "user" },
                                ]}
                                name="role"
                                handleChange={handleChange}
                            ></SelectOptionInput>
                        </div>
                    </div>

                    <div className="flex">
                        <FormLabel htmlFor="gender">Gender: </FormLabel>
                        <div className="w-2/3 flex flex-col">
                            <SelectOptionInput
                                options={[
                                    { label: "Male", value: "male" },
                                    { label: "Female", value: "female" },
                                    { label: "Other", value: "other" },
                                ]}
                                name="gender"
                                handleChange={handleChange}
                            ></SelectOptionInput>
                        </div>
                    </div>

                    <div className="flex">
                        <FormLabel htmlFor="phone">Phone : </FormLabel>
                        <div className="w-2/3 flex flex-col">
                            <TextInput name="phone" type="tel" handleChange={handleChange} />
                        </div>
                    </div>

                    <div className="flex">
                        <FormLabel htmlFor="address">Address : </FormLabel>
                        <div className="w-2/3 flex flex-col">
                            <TextArea name="address" handleChange={handleChange} />
                        </div>
                    </div>

                    <div className="flex">
                        <FormLabel htmlFor="image">Image : </FormLabel>
                        <div className="w-2/3 flex flex-col">
                            <FileInput name="image" handleChange={handleFileChange} />
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="w-2/3 flex gap-3 ">
                            <CancelButton>Reset</CancelButton>
                            <SubmitButton>Register</SubmitButton>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}