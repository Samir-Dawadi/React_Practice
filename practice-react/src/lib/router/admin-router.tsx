import { Suspense } from "react"
import Loading from "../../components/ui/Loading/Loading"
import PermissionCheck from "../../config/PermissionCheck"
import AdminDahboard from "../../pages/Admin/Dashboard"
import AdminLayout from "../../pages/Layouts/AdminLayout"
import UserDetail from "../../pages/Admin/user/UserDetail"
import UserList from "../../pages/Admin/user/UserList"
import UserRegister from "../../pages/Admin/user/UserRegister"
import NotFound from "../../pages/error/NotFound"

export const AdminRoute = [
    {
        path: "/admin",
        element:
            (
                <Suspense fallback={<Loading />}>         //fallback le component load hunu vanda paila k load garni vanera dekhauca
                    <PermissionCheck allowedRole="admin">
                        <AdminLayout />
                    </PermissionCheck>
                </Suspense >
                // <Suspense fallback={<Loading />}>        //fallback le component load hunu vanda paila k load garni vanera dekhauca
                //     <AdminLayout />
                // </Suspense >
            )
        ,
        children: [
            { index: true, Component: AdminDahboard },
            { path: "users", element: <UserList /> },
            { path: "user/create", element: <UserRegister /> },
            { path: "user/:username/detail", element: <UserDetail /> },
            { path: "user/:id", element: <>User Edit form display</> },
            { path: "*", element: <NotFound /> }
        ]
    }
]