import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { FormModalStyled } from "./styled"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterContactData, schemaRegisterContact, schemaUpdateContact, UpdateContactData } from "./validator"
import { useModal } from "../../hooks/useModal"
import { useEffect, useState } from "react"
import { ZodSchema } from "zod"

export function FormModal(){

    const { isUpdate, updateContact, createContact } = useModal()

    const [correctlySchema, setCorrectlySchema] = useState<ZodSchema>()

    useEffect(()=>{

        function getCorrectlySchema(){
            if(isUpdate){
                setCorrectlySchema(schemaUpdateContact)
            }else{
                setCorrectlySchema(schemaRegisterContact)
            }
        }

        getCorrectlySchema()
    },[isUpdate])

    const {register, handleSubmit, formState: {errors}} = useForm<RegisterContactData>({
        mode: "onBlur",
        resolver: zodResolver(correctlySchema!)
    })

    return (
        <FormModalStyled>
            {isUpdate ? (
                <form onSubmit={handleSubmit(updateContact)}>
                    <div className="divInputError">
                        <Input placeholder="Edite o nome" label="Nome completo" type="text" register={register} toRegister="fullName"/>
                        <p className="error">{errors.fullName?.message}</p>
                    </div>
                    <div className="divInputError">
                        <Input placeholder="Edite o email" label="Email" type="text" register={register} toRegister="email"/>
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className="divInputError">
                        <Input placeholder="Edite o telefone" label="Telefone" type="text" register={register} toRegister="phone"/>
                        <p className="error">{errors.phone?.message}</p>
                    </div>
                    <button type="submit">
                        Confirmar alterações
                    </button>
                </form>
            ):(
                <form onSubmit={handleSubmit(createContact)}>
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
                    <button type="submit">
                        Adicionar contato
                    </button>
                </form>
            )}
        </FormModalStyled>
    )

}