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

// import AdminDahboard from "../pages/Admin/Dashboard"
// import AdminLayout from "../pages/Layouts/AdminLayout"



const routeData = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    { path: "/reset-password", Component: ResetPassword },

    {
        path: "/admin", element: <AdminLayout />, children: [
            { index: true, Component: AdminDahboard },
            { path: "users", element: <UserList /> },
            { path: "user/create", element: <UserRegistration /> },
            { path: "user/:id/detail", element: <>User Detail</> },
            { path: "user/:id", element: <>User Edit form display</> },

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