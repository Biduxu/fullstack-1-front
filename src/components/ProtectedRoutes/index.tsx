import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export function ProtectRoutes(){
    const {loading} = useAuth()

    if(loading){
        return null
    }

    return <Navigate to="/"/>
}