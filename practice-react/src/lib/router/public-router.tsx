import ForgetPassword from "../../pages/auth/ForgetPassword";
import ResetPassword from "../../pages/auth/PasswordReset";
import HomePage from "../../pages/Home/HomePage.module";
import AdminLayout from "../../pages/Layouts/AdminLayout";
import AuthLayout from "../../pages/Layouts/AuthLayout";

export const PublicRoute = [
    // { path: "/", element: <HomePage /> },
    // { path: "/forget-password", element: <ForgetPassword /> },
    // { path: "/reset-password", Component: ResetPassword },

    {
        path: "/",
        element: <AuthLayout />,
        children: [

            { index: true, element: <HomePage /> },
            { path: "/forget-password", element: <ForgetPassword /> },
            { path: "/reset-password", Component: ResetPassword },
        ],

    },



    { path: "/moderator", element: <AdminLayout /> },
    { path: "/user", element: <AdminLayout /> },
]