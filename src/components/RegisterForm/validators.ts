import { z } from "zod"

export const schemaRegister = z.object({
    fullName: z.string().nonempty("Nome completo obrigatório").length(6),
    email: z.string().email("Deve ser um email"),
    phone: z.string().nonempty().length(8, "Mínimo 8 caracteres"),
    password: z.string().nonempty("Senha obrigatória").length(8, "Mínimo 8 caracteres")
})

export type RegisterData = z.infer<typeof schemaRegister>