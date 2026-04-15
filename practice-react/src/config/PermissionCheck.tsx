import type React from "react";
import { useAuth } from "../lib/hooks/useAuth";
import { Navigate } from "react-router";

export default function PermissionCheck({ children, allowedRole }: Readonly<{ children: React.ReactNode, allowedRole: string }>) {

    const { authUser } = useAuth()

    if (authUser && authUser.role != allowedRole) {
        return <Navigate to={'/' + authUser.role} />
    }

    return <> {children} </>
}


