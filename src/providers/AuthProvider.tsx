import { ReactNode, createContext, useEffect, useState } from "react"
import { LoginData } from "./../components/LoginForm/validator"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { RegisterData } from "../components/RegisterForm/validators"


interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    singIn: (data: LoginData) => void,
    registerUser: (data: RegisterData) => void,
    messageError: boolean,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export function AuthProvider({children}: AuthProviderProps){

    const navigate = useNavigate()

    const [messageError, setMessageError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadUser(){
            const token = localStorage.getItem("tokenListContacts")
            if(!token){
                setLoading(false)
                return 
            }

            try{
                await api.get("/users", {headers: {authorization: `Bearer ${token}`}})
                
                navigate("/dashboard")
                
            }catch(err){
                return null
            }finally{
                setLoading(false)
            }
        }
        loadUser()
    },[])

    async function singIn(data: LoginData){
        try{
            const response = await api.post("/login", data)

            localStorage.setItem("tokenListContacts", response.data.token)
            setMessageError(false)
            navigate("/dashboard")
        }catch(err){
            setMessageError(true)
        }

    }

    async function registerUser(data: RegisterData){
        try{
            const response = await api.post("/users", data)
            console.log("cadastrado")
            setMessageError(false)
        }catch(err){
            setMessageError(true)
        }
    }

    return (
        <AuthContext.Provider value={{singIn, messageError, registerUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )

}