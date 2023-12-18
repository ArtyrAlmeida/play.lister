import {z} from "zod";

export const songSchema = z.object({
  name: z.string().trim()
        .refine((value)=> value.length !== 0,{message:'error: O nome da musica não pode ser vazio'}),
  author: z.string().trim()
        .refine((value)=> value.length !== 0,{message:'error: O artista da musica não pode ser vazio'}),
  description: z.string().trim()
        .refine((value)=> value.length !== 0,{message:'error: O album da musica não pode ser vazio'}),
  length: z.string().trim()
        .refine((value)=> value.length !== 0,{message:'error: O genero da musica não pode ser vazio'}),
})

export type ISongSchema = z.infer<typeof songSchema>; 