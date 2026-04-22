
// export default function ProductLayout(){}

import { Outlet } from "react-router"

export const ProductLayout = () => {
    return (
        <>
            <header>layout header</header>
            <Outlet />
            <footer>layout footer</footer>
        </>
    )
}