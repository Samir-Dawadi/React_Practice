import { H1 } from "../ui/typography/PageTitle"
import Logo from "../Logo/logo"
export default function LeftSidePanel() {
    return (
        <div className="w-1/3 flex flex-col gap-5 bg-emerald-800 rounded-sm justify-center items-center p-7 text-white">
            <Logo />
            <H1 className="text-green-100">Login Page</H1>
            <p className="text-center p-5"> ipsum dolor sit amet consectetur, adipisicing elit. Veritatis alias deleniti placeat odit id amet accusantium reiciendis sequi optio eaque suscipit velit delectus, ullam repellat a ex enim. Minima, officia.</p>
        </div>
    )
}