import { H1 } from "../ui/typography/PageTitle"
import Logo from "../Logo/logo"
export default function LeftSidePanel({ pagetitle, content }: Readonly<{ pagetitle: string, content: string }>) {
    return (
        <div className="w-1/3 flex flex-col gap-5 bg-emerald-800 rounded-sm justify-center items-center p-7 text-white">
            <Logo />
            <H1 className="text-green-100">{pagetitle}</H1>
            <p className="text-center p-5">{content}</p>
        </div>
    )
}