import { useEffect } from "react";

import { useAuth } from "../../lib/hooks/useAuth";
import { useNavigate } from "react-router";
import LoginForm from "../../components/auth/LoginForm";


export default function HomePage() {

    const { authUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (authUser && authUser.role) {
            navigate('/' + authUser.role)                     //after / the url will be added based on role of user
        }
    }, [authUser])


    return (
        <LoginForm />
    )
}