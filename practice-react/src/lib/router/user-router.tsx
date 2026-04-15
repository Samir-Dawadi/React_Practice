
import PermissionCheck from "../../config/PermissionCheck"
import UserLayout from "../../pages/Layouts/UserLayout"
import UserDashboard from "../../pages/user/UserDashboard"
import UserProfile from "../../pages/user/UserProfile"

export const UserRoute = [
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
    }
]