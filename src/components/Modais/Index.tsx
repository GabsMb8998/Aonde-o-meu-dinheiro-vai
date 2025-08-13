import { ReactNode } from "react"

interface ModalProps {
    children: ReactNode
}

function Modal({children}: ModalProps){
    return(
        <div className="absolute right-0 bottom-0 h-screen w-screen bg-[#212121] bg-opacity-50 flex justify-center items-center">
            {children}
        </div>
    )
}

export default Modal