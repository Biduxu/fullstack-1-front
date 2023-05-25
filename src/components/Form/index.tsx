import { LoginForm } from "../LoginForm"
import { RegisterForm } from "../RegisterForm"
import { FormStyled } from "./styled"
import { useState } from "react"


export function Form() {

    const [isRegister, setIsRegister] = useState<boolean>(false)

    return (
        <FormStyled>
            {isRegister === false ? (
                <>
                    <h2>Login</h2>
                    <LoginForm setIsRegister={setIsRegister}/>
                </>
            ):(
                <>
                    <h2>Cadastro</h2>
                    <RegisterForm setIsRegister={setIsRegister}/>
                </>
            )}
        </FormStyled>
    )

}