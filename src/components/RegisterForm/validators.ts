import { z } from "zod"

export const schemaRegister = z.object({
    fullName: z.string().nonempty("Nome completo obrigatório").min(6, "Mínimo 6 caracteres"),
    email: z.string().email("Deve ser um email"),
    phone: z.string().nonempty().min(8, "Mínimo 8 caracteres"),
    password: z.string().nonempty("Senha obrigatória").min(8, "Mínimo 8 caracteres")
})

export type RegisterData = z.infer<typeof schemaRegister>