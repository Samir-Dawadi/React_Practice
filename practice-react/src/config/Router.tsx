import { createBrowserRouter, RouterProvider } from "react-router"
// import { BrowserRouter, Routes, Route } from "react-router"

import HomePage from "../pages/Home/HomePage.module"
import ForgetPassword from "../pages/auth/ForgetPassword"
import NotFound from "../pages/error/NotFound"
import AdminLayout from "../pages/Layouts/AdminLayout"
import AdminDahboard from "../pages/Admin/Dashboard"
import UserList from "../pages/Admin/user/UserList"
import UserRegistration from "../pages/Admin/user/UserRegister"
import ResetPassword from "../pages/auth/PasswordReset"
import UserDetail from "../pages/Admin/user/UserDetail"
import { Suspense } from "react"
import PermissionCheck from "./PermissionCheck"
import UserDashboard from "../pages/user/UserDashboard"
import UserProfile from "../pages/user/UserProfile"
import UserLayout from "../pages/Layouts/UserLayout"
// import Loading from "../components/ui/Loading/Loading"

// import AdminDahboard from "../pages/Admin/Dashboard"
// import AdminLayout from "../pages/Layouts/AdminLayout"



const routeData = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    { path: "/reset-password", Component: ResetPassword },

    {
        path: "/admin",
        element:
            (

                <Suspense fallback={<>Skeleton</>}>         //fallback le component load hunu vanda paila k load garni vanera dekhauca
                    <PermissionCheck allowedRole="admin">
                        <AdminLayout />
                    </PermissionCheck>
                </Suspense >

                // <Suspense fallback={<Loading />}>                                    //fallback le component load hunu vanda paila k load garni vanera dekhauca
                //     <AdminLayout />
                // </Suspense >
            )
        ,
        children: [
            { index: true, Component: AdminDahboard },
            { path: "users", element: <UserList /> },
            { path: "user/create", element: <UserRegistration /> },
            { path: "user/:username/detail", element: <UserDetail /> },
            { path: "user/:id", element: <>User Edit form display</> },

        ]
    },

    {
        path: "/user",

        element:
            <PermissionCheck allowedRole="user">
                <UserLayout />
            </PermissionCheck>
        ,

        children: [
            { index: true, element: <UserDashboard /> },
            { path: "profile", element: <UserProfile /> },
        ]
    },



    { path: "*", element: <NotFound /> }
])

export default function RouterConfig() {
    return (

        <RouterProvider router={routeData} />
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/forget-password" Component={ForgetPassword}></Route>
        //         <Route path="/" element={<HomePage />}></Route>
        //     </Routes>
        // </BrowserRouter>
    )
}