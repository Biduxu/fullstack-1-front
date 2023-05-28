import { z } from "zod"

export const schemaRegisterContact = z.object({
    fullName: z.string().nonempty("Nome completo obrigatório").min(6, "Mínimo 6 caracteres"),
    email: z.string().email("Deve ser um email"),
    phone: z.string().nonempty().min(8, "Mínimo 8 caracteres")
})

export type RegisterContactData = z.infer<typeof schemaRegisterContact>

export const schemaUpdateContact = z.object({
    fullName: z.string().nonempty("Nome completo obrigatório").min(6, "Mínimo 6 caracteres"),
    email: z.string().email("Deve ser um email"),
    phone: z.string().nonempty().min(8, "Mínimo 8 caracteres")
})

export type UpdateContactData = z.infer<typeof schemaUpdateContact>