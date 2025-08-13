import { ReactNode } from "react"

interface HeaderProps {
    title: string
    children: ReactNode
}

function Header({title, children}: HeaderProps){
    return(
        <header className=" w-full flex justify-between items-center text-3xl font-medium ">
            {title}
            {children}
        </header>
    )
}

export default Header