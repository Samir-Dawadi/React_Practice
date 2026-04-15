import { useEffect, type Dispatch, type ReactNode, type SetStateAction } from "react";

import { useOutletContext } from "react-router";
import LoginForm from "../../components/auth/LoginForm";


export default function HomePage() {



    const { setPageContext } = useOutletContext<{
        setPageContext: Dispatch<SetStateAction<{ pagetitle: string, content: string, formtitle: ReactNode }>>
    }>()

    useEffect(() => {
        setPageContext({
            pagetitle: "Welcome to CMS",
            content: "login message.......",
            formtitle: "Sign In from here"
        })
    }, [])




    return (
        <LoginForm />
    )
}