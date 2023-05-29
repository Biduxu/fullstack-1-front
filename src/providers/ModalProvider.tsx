import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { RegisterContactData, UpdateContactData } from "../components/FormModal/validator"

interface ModalProviderProps {
    children: ReactNode
}

interface ModalContextValues {
    statusModal: boolean,
    setStatusModal: React.Dispatch<React.SetStateAction<boolean>>,
    isUpdate: boolean,
    setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>,
    setId: React.Dispatch<React.SetStateAction<string>>,
    updateContact: (data: UpdateContactData) => void,
    createContact: (data: RegisterContactData) => void
}

export const ModalContext = createContext<ModalContextValues>({} as ModalContextValues)

export function ModalProvider({children}: ModalProviderProps) {

    const [statusModal, setStatusModal] = useState<boolean>(false)

    const [isUpdate, setIsUpdate] = useState<boolean>(false)

    const [id, setId] = useState<string>("")

    async function updateContact(data: UpdateContactData){
        const token = localStorage.getItem("tokenListContacts")

        try{
            await api.patch(`/contacts/${id}`, data, {headers: {authorization: `Bearer ${token}`}})
            setStatusModal(false)
            window.location.reload()
        }catch(err){
            null
        }    
    }

    async function createContact(data: RegisterContactData){
        const token = localStorage.getItem("tokenListContacts")

        try{
            await api.post("/contacts", data, {headers: {authorization: `Bearer ${token}`}})
            setStatusModal(false)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <ModalContext.Provider value={{statusModal, setStatusModal, isUpdate, setIsUpdate, setId, updateContact, createContact}}>
            {children}
        </ModalContext.Provider>
    )

}