import { ReactNode, createContext, useEffect, useState } from "react"
import { LoginData } from "./../components/LoginForm/validator"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { RegisterData } from "../components/RegisterForm/validators"

interface AuthProviderProps {
    children: ReactNode
}

export interface Contact {
    id: string,
    fullName: string,
    email: string,
    phone: string,
    registrationDate: Date
}

export interface User {
    id: string,
    fullName: string,
    email: string,
    phone: string,
    registrationDate: Date
}

interface AuthContextValues {
    singIn: (data: LoginData) => void,
    registerUser: (data: RegisterData) => void,
    messageError: boolean,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    contacts: Contact[] | undefined,
    user: User | undefined,
    setLogin: React.Dispatch<React.SetStateAction<boolean>>,
    toastfy: boolean,
    setToastfy: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export function AuthProvider({children}: AuthProviderProps){

    const navigate = useNavigate()

    const [messageError, setMessageError] = useState(false)
    const [loading, setLoading] = useState(true)

    const [contacts, setContacts] = useState<Contact[]>()
    const [user, setUser] = useState<User>()

    const [login, setLogin] = useState<boolean>(false)

    const [toastfy, setToastfy] = useState<boolean>(false)

    useEffect(()=>{
        async function loadUser(){
            const token = localStorage.getItem("tokenListContacts")
            if(!token){
                setLoading(false)
                return 
            }

            try{
                const response = await api.get("/contacts", {headers: {authorization: `Bearer ${token}`}})
                const contactsResponse: Contact[] = response.data

                const responseUser = await api.get("/users", {headers: {authorization: `Bearer ${token}`}})
                const userData: User = responseUser.data 
                
                setUser(userData)
                setContacts(contactsResponse)
                navigate("/dashboard")
                
            }catch(err){
                return null
            }finally{
                setLoading(false)
            }
        }
        loadUser()
    },[login])

    async function singIn(data: LoginData){
        try{
            const response = await api.post("/login", data)

            localStorage.setItem("tokenListContacts", response.data.token)
            setMessageError(false)
            setLogin(true)
        }catch(err){
            setMessageError(true)
        }

    }

    async function registerUser(data: RegisterData){
        try{
            await api.post("/users", data)
            
            setMessageError(false)
            setToastfy(true)
        }catch(err){
            setMessageError(true)
        }
    }

    return (
        <AuthContext.Provider value={{singIn, messageError, registerUser, loading, setLoading, contacts, setLogin, user, toastfy, setToastfy}}>
            {children}
        </AuthContext.Provider>
    )

}