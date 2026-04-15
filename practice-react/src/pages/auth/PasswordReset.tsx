import ResetPasswordForm from "../../components/auth/ResetPasswordForm";

// import Logo from "../../components/Logo/logo";
// import { H1 } from "../../components/ui/typography/PageTitle";

import { useEffect, type Dispatch, type ReactNode, type SetStateAction } from "react";

import { NavLink, useOutletContext } from "react-router";

export default function ResetPassword() {

    const { setPageContext } = useOutletContext<{
        setPageContext: Dispatch<SetStateAction<{ pagetitle: string, content: string, formtitle: ReactNode }>>
    }>()

    useEffect(() => {
        setPageContext({
            pagetitle: "Password Reset ",
            content: "lPassword Reset Page.........",
            formtitle: "Set password"
        })
    }, [])

    return (
        <>
            {/* Design 
            <section className="flex w-full p-5 h-screen">
                <div className="w-1/3 bg-teal-900 flex flex-col h-full p-5 text-white items-center justify-center rounded-md gap-5">
                    <Logo />
                    <div className="flex gap-5 flex-col w-full items-center justify-center">
                        <H1 className="text-white">Reset Password</H1>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At rerum
                            odio harum architecto ut beatae, quos, suscipit placeat quidem
                            quibusdam distinctio dicta ipsa molestias natus voluptas pariatur
                            dignissimos omnis maxime?
                        </p>
                    </div>
                </div>
                <div className="w-2/3 flex flex-col gap-10 bg-gray-100 p-10 rounded-md">
                    <div className="flex border-b border-b-green-900/30 pb-5">
                        <H1 className="text-green-900">
                            <em>Reset your password?</em>
                        </H1>
                    </div> */}

            <ResetPasswordForm />

            <div className="flex w-full justify-center items-center">
                <span className="text-lg text-teal-800"> - Or -</span>
            </div>

            <div className="flex w-full items-center justify-center">
                <NavLink
                    to="/"
                    className="border p-2 text-center rounded-full shadow border-teal-800/40 w-full text-teal-700 text-sm hover:underline hover:text-teal-600 hover:bg-teal-800/5 transition hover:scale-98"
                >
                    Login
                </NavLink>
            </div>
            {/* </div>
            </section> */}
        </>
    );
}
