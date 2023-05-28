import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { ProtectRoutes } from "../components/ProtectedRoutes"

export function RoutesMain() {

    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route element={<ProtectRoutes/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )

}