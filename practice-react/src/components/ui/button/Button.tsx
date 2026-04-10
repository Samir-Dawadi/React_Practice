import React from "react"

export interface IButtonProps {
    disabled?: boolean,      //if desabled is false then the button is clickable , else if it is true the button is not clikable
    className?: string,
    children: React.ReactNode
}

export const CancelButton = ({ disabled = false, className = "", children }: Readonly<IButtonProps>) => {
    return (
        <>
            <button type="reset"
                className={`rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2 ${className}`}
                disabled={disabled}
            >
                {children}
            </button>

        </>
    )
}

export const SubmitButton = ({ disabled = false, className = "", children }: Readonly<IButtonProps>) => {
    return (
        <>
            <button type="submit"
                className={`rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2 ${className}`}
                disabled={disabled}
            >
                {children}
            </button>

        </>
    )
}