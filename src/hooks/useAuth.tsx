import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

export function useAuth(){
    const authContext = useContext(AuthContext)

    return authContext
}