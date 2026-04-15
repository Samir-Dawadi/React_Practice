import { createBrowserRouter, RouterProvider } from "react-router"
// import { BrowserRouter, Routes, Route } from "react-router"

import NotFound from "../pages/error/NotFound"
import { AdminRoute } from "../lib/router/admin-router"
import { UserRoute } from "../lib/router/user-router"
import { PublicRoute } from "../lib/router/public-router"
// import Loading from "../components/ui/Loading/Loading"

// import AdminDahboard from "../pages/Admin/Dashboard"
// import AdminLayout from "../pages/Layouts/AdminLayout"



const routeData = createBrowserRouter([



    ...PublicRoute,
    ...AdminRoute,
    ...UserRoute,



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