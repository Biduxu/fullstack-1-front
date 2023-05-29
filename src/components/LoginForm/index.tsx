import { useForm } from "react-hook-form";
import { LoginFormStyled } from "./styled";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schemaLogin } from "./validator";
import { Input } from "../Input";
import { useAuth } from "../../hooks/useAuth";

interface LoginFormProps {
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}


export function LoginForm({setIsRegister}: LoginFormProps) {

    const {singIn, messageError} = useAuth()

    const {register, handleSubmit, formState: {errors}} = useForm<LoginData>({
        mode: "onBlur",
        resolver: zodResolver(schemaLogin)
    })

    return (
        <LoginFormStyled>
            <form onSubmit={handleSubmit(singIn)}>
                <div className="divInputError">
                    <Input placeholder="Digite seu email" label="Email" type="text" register={register} toRegister="email"/>
                    <p className="error">{errors.email?.message}</p>
                </div>
                <div className="divInputError">
                    <Input placeholder="Digite sua senha" label="Senha" type="password" register={register} toRegister="password"/>
                    <p className="error">{errors.password?.message}</p>
                </div>
                {messageError ? (
                    <p className="error">Email ou senha inválidos!</p>
                ):( 
                    null
                )}
                <div className="divButtons">
                    <button type="submit">
                        Entrar
                    </button>
                    <button onClick={()=>setIsRegister(true)}>
                        Cadastrar
                    </button>
                </div>
            </form>
        </LoginFormStyled>
    )

}