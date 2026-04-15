import { Outlet } from "react-router";
import Logo from "../../components/Logo/logo";
import { H1 } from "../../components/ui/typography/PageTitle";
import { useState } from "react";

export default function AuthLayout() {

    const [pageContent, setPageContent] = useState({
        pagetitle: "Welcome to CMS",
        content: "Welcome! We’re glad to have you here. Log in to explore your personalized dashboard, access your features, and stay connected with everything that matters to you. Your journey starts now—simple, secure, and designed just for you. Let’s get started and make the most of your experience today",
        formtitle: "Sign In"
    })

    return (
        <section className="h-screen w-full bg-gray-50 flex p-5">
            <div className="w-1/3 flex flex-col gap-5 bg-emerald-800 rounded-sm justify-center items-center p-7 text-white">
                <Logo />
                <H1 className="text-green-100 ">{pageContent.pagetitle}</H1>
                <p className="text-center p-5">{pageContent.content}</p>
            </div>

            <div className="w-2/3 flex flex-col gap-5 bg-gray-200 rounded-sm p-10">
                <div className="flex border-b border-b-green-900/70 pb-10">

                    <H1>{pageContent.formtitle}</H1>
                </div>

                <Outlet />
            </div>

        </section>


    )
} 