import z from "zod";

export interface IUsername {
    username: string;
}

export interface ICredentials extends IUsername {
    password: string
}


export const LoginSchema = z.object({
    username: z.email("Invalid Email Format").nonempty().nonoptional(),
    password: z.string().nonempty().nonoptional()
})