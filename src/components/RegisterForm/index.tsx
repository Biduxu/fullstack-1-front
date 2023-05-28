import { RegisterFormStyled } from "./styled";
import { useForm } from "react-hook-form";
import { RegisterData, schemaRegister } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { useAuth } from "../../hooks/useAuth";

interface RegisterFormProps {
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}

export function RegisterForm({setIsRegister}: RegisterFormProps) {

    const {registerUser, messageError} = useAuth()

    const {register, handleSubmit, formState: {errors}} = useForm<RegisterData>({
        mode: "onBlur",
        resolver: zodResolver(schemaRegister)
    })

    return (
        <RegisterFormStyled>
            <form onSubmit={handleSubmit(registerUser)}>
                <div className="divInputError">
                    <Input placeholder="Digite o nome completo" label="Nome completo" type="text" register={register} toRegister="fullName"/>
                    <p className="error">{errors.fullName?.message}</p>
                </div>
                <div className="divInputError">
                    <Input placeholder="Digite o email" label="Email" type="text" register={register} toRegister="email"/>
                    <p className="error">{errors.email?.message}</p>
                </div>
                <div className="divInputError">
                    <Input placeholder="Digite o telefone" label="Telefone" type="text" register={register} toRegister="phone"/>
                    <p className="error">{errors.phone?.message}</p>
                </div>
                <div className="divInputError">
                    <Input placeholder="Digite a senha" label="Senha" type="password" register={register} toRegister="password"/>
                    <p className="error">{errors.password?.message}</p>
                </div>
                {messageError ? (
                    <p className="error">Algo deu errado</p>
                ):(
                    null
                )}
                <div className="divButtons">
                    <button type="submit">Cadastrar</button>
                    <button onClick={()=>setIsRegister(false)}>Voltar ao login</button>
                </div>
            </form>
        </RegisterFormStyled>
    )

}