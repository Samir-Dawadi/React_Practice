import ForgetPassword from "../../pages/auth/ForgetPassword";
import ResetPassword from "../../pages/auth/PasswordReset";
import HomePage from "../../pages/Home/HomePage.module";
import AdminLayout from "../../pages/Layouts/AdminLayout";

export const PublicRoute = [
    { path: "/", element: <HomePage /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    { path: "/reset-password", Component: ResetPassword },
    { path: "/moderator", element: <AdminLayout /> },
    { path: "/user", element: <AdminLayout /> },
]