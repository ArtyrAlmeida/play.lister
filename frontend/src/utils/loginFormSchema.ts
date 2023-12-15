import {z} from "zod";

export const loginSchema = z.object({
  email: z.string().trim()
        .email("E-mail inválido")
        .refine((value)=> value.length !== 0,{message:'error: O e-mail não pode ser vazio'}),
  password:z.string().trim()
          .min(6, 'A senha deve ter ao menos 6 dígitos')
          .refine((value)=> value.length !== 0,{message:'error: A senha não pode ser vazia'})
})

export type ILoginUser = z.infer<typeof loginSchema>; 