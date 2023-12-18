import {z} from "zod";

export const songSchema = z.object({
  titulo: z.string().trim()
        .refine((value)=> value.length !== 0,{message:'error: O nome da musica não pode ser vazio'}),
  artista: z.string().trim()
        .refine((value)=> value.length !== 0,{message:'error: O artista da musica não pode ser vazio'}),
  album: z.string().trim()
        .refine((value)=> value.length !== 0,{message:'error: O album da musica não pode ser vazio'}),
  genero: z.string().trim()
        .refine((value)=> value.length !== 0,{message:'error: O genero da musica não pode ser vazio'}),
})

export type ISongSchema = z.infer<typeof songSchema>; 