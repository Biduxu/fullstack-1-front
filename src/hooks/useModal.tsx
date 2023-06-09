import { useContext } from "react"
import { ModalContext } from "../providers/ModalProvider"

export function useModal(){
    const modalContext = useContext(ModalContext)

    return modalContext
}