import { H1 } from "../ui/typography/PageTitle"
import LoginForm from "./LoginForm"
// import LoginPage from "./LoginForm"
export default function RightSidePanel() {
    return (
        <div className="w-2/3 flex flex-col gap-5 bg-gray-200 rounded-sm p-10">
            <div className="flex border-b border-b-green-900/70 pb-10">

                <H1>Login Form</H1>
            </div>
            <LoginForm />

        </div>
    )
}