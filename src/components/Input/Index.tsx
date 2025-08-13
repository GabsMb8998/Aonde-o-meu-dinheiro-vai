import { HtmlHTMLAttributes, InputHTMLAttributes, ReactNode } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode
    width?: string
} 

function Input({children, width, ...props} : InputProps){
    return(
        <div className={` w-${width} flex ${width ? 'items-center gap-6': 'flex-col' } `}>
            <div className="text-[#525252] font-medium">
                {children}
            </div>
            <input type="text" {...props} className={`w-full placeholder:text-[#A9A9A9] border-1 px-4 py-2 rounded border-[#D8D8D8] focus:outline-none`}/>
        </div>
    )
}

export default Input