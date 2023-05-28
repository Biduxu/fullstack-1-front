import { ReactNode, createContext, useState } from "react"

interface ModalProviderProps {
    children: ReactNode
}

interface ModalContextValues {
    statusModal: boolean,
    setStatusModal: React.Dispatch<React.SetStateAction<boolean>>,
    isUpdate: boolean,
    setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextValues>({} as ModalContextValues)

export function ModalProvider({children}: ModalProviderProps) {

    const [statusModal, setStatusModal] = useState<boolean>(false)

    const [isUpdate, setIsUpdate] = useState<boolean>(false)

    return (
        <ModalContext.Provider value={{statusModal, setStatusModal, isUpdate, setIsUpdate}}>
            {children}
        </ModalContext.Provider>
    )

}