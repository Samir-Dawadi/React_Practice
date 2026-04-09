import logo from "../../assests/image/logo.png"

export default function Logo({ className = "size-50" }: Readonly<{ className?: string }>) {
    return <img src={logo} alt="logo" className={`rounded-full ${className}`} />
}