import {z} from "zod";

export const registerSchema = z.object({
  name: z.string().trim()
        .min(3,'O Nome de usuário deve ter no mínimo 3 caracteres'),
  email: z.string().trim()
        .email("E-mail inválido")
        .refine((value)=> value.length !== 0,{message:'error: O e-mail não pode ser vazio'}),
  password:z.string().trim()
          .min(6, 'A senha deve ter ao menos 6 dígitos')
          .refine((value)=> value.length !== 0,{message:'error: A senha não pode ser vazia'}),
  passwordConfirm: z.string().trim()
          .refine((value)=> value.length !== 0,{message:'error: A senha não pode ser vazia'}),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "As senhas não são iguais",
  path: ["passwordConfirm"], // path of error
});

export type IRegisterUser = z.infer<typeof registerSchema>; 