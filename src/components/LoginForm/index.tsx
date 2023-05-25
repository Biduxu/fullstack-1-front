import { LoginFormStyled } from "./styled";

interface LoginFormProps {
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}


export function LoginForm({setIsRegister}: LoginFormProps) {

    return (
        <LoginFormStyled>
            Formulario login
        </LoginFormStyled>
    )

}