import { Outlet, useNavigate } from "react-router";
// import Logo from "../../components/Logo/logo";
import { H1 } from "../../components/ui/typography/PageTitle";
import { useEffect, useState } from "react";
import { useAuth } from "../../lib/hooks/useAuth";
import LeftSidePanel from "../../components/auth/LeftSidePanel";
import RightSidePanel from "../../components/auth/RightSidePanel";

export default function AuthLayout() {


    const { authUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (authUser && authUser.role) {
            navigate('/' + authUser.role)                     //after / the url will be added based on role of user here the role is admin so if we try to change the url then we only get redirected to the admin page , we cannot redirect to other page
        }
    }, [authUser])



    const [pageContext, setPageContext] = useState({
        pagetitle: "Welcome to CMS",
        content: "Welcome! We’re glad to have you here. Log in to explore your personalized dashboard, access your features, and stay connected with everything that matters to you. Your journey starts now—simple, secure, and designed just for you. Let’s get started and make the most of your experience today",
        formtitle: "Sign In"
    })



    return (
        <section className="h-screen w-full bg-gray-50 flex p-5">
            <LeftSidePanel pagetitle={pageContext.pagetitle} content={pageContext.content} />


            <RightSidePanel pagetitle={pageContext.pagetitle}>
                <Outlet context={{ setPageContext }} />        //helps to pass the value in the children that are homepage , forgetpasssword,ResetPassword  and the parent is AuthLayout
            </RightSidePanel>
        </section>


    )
} 