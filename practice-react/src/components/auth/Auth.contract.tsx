import z from "zod";

export interface IUsername {
    username: string;
}

export interface ICredentials extends IUsername {
    password: string
}

export interface IResetPassword {
    password: string,
    confirmPassword: string
}


export const LoginSchema = z.object({
    username: z.email("Invalid Email Format...").nonempty().nonoptional(),
    password: z.string().nonempty().nonoptional()
})

export const ForgetPasswordSchema = z.object({
    username: z.email("Invalid Email Format...").nonempty().nonoptional(),

})

// export const UserCreateSchema = z.object({
//     username:z.string().nonempty().nonoptional(),
//     email:z.email().nonempty().nonoptional(),
//     role:z.role().nonempty().nonoptional(),
//     address:z.string().nonempty().nonoptional(),
//     phone:z.number().nonempty().nonoptional(),
//     image:z.string().nonempty().nonoptional(),
//     submit:z.string().nonempty().nonoptional(),
// })