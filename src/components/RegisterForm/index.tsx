import { RegisterFormStyled } from "./styled";

interface RegisterFormProps {
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}

export function RegisterForm({setIsRegister}: RegisterFormProps) {

    return (
        <RegisterFormStyled>
            Formulario Cadastro
        </RegisterFormStyled>
    )

}