import { Form } from "../../components/Form"
import { LoginStyled } from "./styled"


export function Login() {

    return (
        <LoginStyled>
            <div className="firstDiv">
                <h1>Lista de Contatos</h1>
                <Form/>
            </div>
        </LoginStyled>
    )

}