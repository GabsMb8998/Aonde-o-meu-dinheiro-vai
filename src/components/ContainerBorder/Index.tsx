import { ReactNode } from "react"

interface ContainerBorderProps {
    label: string
    children?: ReactNode
} 

function ContainerBorder({ label, children } : ContainerBorderProps){
    return(
        <div className="w-full h-full border-1 border-[#D8D8D8] rounded p-5">
            <span className="text-[#292929] font-semibold">{label}</span>
            {children}
        </div>
    )
}

export default ContainerBorder