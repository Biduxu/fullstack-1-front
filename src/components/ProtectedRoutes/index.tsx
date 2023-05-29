import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export function ProtectRoutes(){
    const {loading, contacts} = useAuth()

    if(loading){
        return null
    }

    return contacts !== undefined ? <Outlet/> : <Navigate to="/"/>
}