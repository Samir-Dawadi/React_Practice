import type { IH1Props } from "./PageTitle.contract"

export const H1 = ({ className = "text-green-900", children }: Readonly<IH1Props>) => {

    return <h1 className={`text-6xl font-semibold ${className} `}> {children} </h1>
}


export const H2 = ({ className = "text-green-950", children }: Readonly<IH1Props>) => {

    return <h2 className={`text-4xl font-semibold ${className} `}> {children} </h2>
} 