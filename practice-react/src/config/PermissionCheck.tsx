import type React from "react";
import { useAuth } from "../lib/hooks/useAuth";
import { Navigate } from "react-router";

export default function PermissionCheck({ children, allowedRole }: Readonly<{ children: React.ReactNode, allowedRole: string }>) {

    const { authUser } = useAuth()
    //if i am a koggedinuser but not permission than redirect to mu dashboard
    if (authUser && authUser.role != allowedRole) {
        return <Navigate to={'/' + authUser.role} />
    }
    else if (!authUser) {
        //if i am not a loggedinuser redirect to login
        return <Navigate to='/' />
    }
    //i am logged in user with permission (allowedRole)
    return <> {children} </>
}


