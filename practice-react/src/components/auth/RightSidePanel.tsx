import type { ReactNode } from "react"
import { H1 } from "../ui/typography/PageTitle"
// import LoginPage from "./LoginForm"
export default function RightSidePanel({ pagetitle, children }: Readonly<{ pagetitle: string, children: ReactNode }>) {
    return (
        <div className="w-2/3 flex flex-col gap-5 bg-gray-200 rounded-sm p-10">
            <div className="flex border-b border-b-green-900/70 pb-10">

                <H1>{pagetitle}</H1>
            </div>

            {children}

        </div>
    )
}