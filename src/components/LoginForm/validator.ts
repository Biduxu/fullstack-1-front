import { z } from "zod"

export const schemaLogin = z.object({
    email: z.string().nonempty("Email obrigatório").email("Deve ser um email"),
    password: z.string().nonempty("Senha obrigatória").length(8, "Mínimo 8 caracteres")
})

export type LoginData = z.infer<typeof schemaLogin>