import { Form } from "../../components/Form"
import { Toastfy } from "../../components/Toastfy"
import { useAuth } from "../../hooks/useAuth"
import { LoginStyled } from "./styled"


export function Login() {

    const {toastfy} = useAuth()

    return (
        <LoginStyled>
            <div className="firstDiv">
                <h1>Lista de Contatos</h1>
                <Form/>
            </div>
            {toastfy ? (
                <Toastfy/>
            ):(
                null
            )}
        </LoginStyled>
    )

}