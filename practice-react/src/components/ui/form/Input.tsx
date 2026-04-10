import type { BaseSyntheticEvent } from "react"
import type { IFileInputProps, ISelectOptionsProps, ISingleOption, ITextAreaProps, ITextInputProps } from "./Form.contract"
import { Controller, useController, type FieldValues } from "react-hook-form"

export const TextInput = <T extends FieldValues>({ type = "text", name, className = "", errMsg = "", control }: Readonly<ITextInputProps<T>>) => {
    return <Controller
        name={name}
        control={control}

        render={({ field }) => {
            return (
                <>
                    <input
                        type={type}

                        {...field}

                        placeholder={`Enter Your ${name}...`}

                        className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className} `}


                    />
                    <span className="text-red-800 text-sm italic">{errMsg}</span>
                </>
            )
        }
        }
    >

    </Controller>

}


// export const TextInput = <T extends FieldValues>({ type = "text", name, className = "", errMsg = "", control }: Readonly<ITextInputProps<T>>) => {
//     return (
//         <>
//             <input
//                 type={type}
//                 control={control}
//                 placeholder={`Enter Your ${name}...`}
//                 className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className} `}
//             />

//             <span className="text-red-800 text-sm italic">{errMsg}</span>
//         </>

//     )
// }





export const FileInput = <T extends FieldValues>({ name, className = "", errMsg = "", control }: Readonly<IFileInputProps<T>>) => {

    //either here u can use Controller tag as before for TextInput else u have to do here using controller i.e useController hook as:
    const { field } = useController({
        name: name,
        control: control
    })

    return (
        <>
            <input
                type={'file'}
                name={'name'}
                multiple={true}   //multiple file choose garna dinxa yekai palta ma
                placeholder={`Enter Your ${name}...`}
                onChange={(e: BaseSyntheticEvent) => {
                    const files = Object.values(e.target.files)  //array of obj ma dinxa file haru user le pathako wala
                    // handleChange(name, files[0] as File)
                    field.onChange(files[0])
                }}
                className={` resize-none border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className} `}
            />

            <span className="text-red-800 text-sm italic">{errMsg}</span>

        </>
    )
}


export const TextArea = <T extends FieldValues>({ name, className = "", errMsg = "", control }: Readonly<ITextAreaProps<T>>) => {
    return (
        <>  <Controller

            name={name}
            control={control}
            render={({ field }) => {

                return (
                    <>
                        <textarea
                            {...field}
                            name={name}
                            placeholder={`Enter Your ${name}...`}

                            rows={5}
                            className={` resize-none border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className} `}
                        > </textarea>

                        <span className="text-red-800 text-sm italic">{errMsg}</span>
                    </>
                )
            }}
        />


        </>
    )
}



export const SelectOptionInput = <T extends FieldValues>({ name, className = "", errMsg = "", options, control }: Readonly<ISelectOptionsProps<T>>) => {

    const { field } = useController({
        name: name,
        control: control
    })
    return (
        <>
            <select

                // name={name}
                // onChange={handleChange}

                {...field}
                className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className} `}
            >
                <option value="">==Select any one==</option>
                {
                    options && options.map((option: ISingleOption, i: number) => (
                        <option key={i} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
            <span className="text-red-800 text-sm italic">{errMsg}</span>
        </>
    )
}