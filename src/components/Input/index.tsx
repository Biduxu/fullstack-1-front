import { InputHTMLAttributes } from "react";

import { InputStyled } from "./styled";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string,
    type: string,
    label?: string,
    register: any,
    toRegister: string
}

export function Input ({placeholder, label, type, register, toRegister}: iInputProps){
    return (
        <InputStyled>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} {...register(toRegister)}/>
        </InputStyled>
    )
}