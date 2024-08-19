import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProfessorDto {
    @IsNumber()
    id: number;

    @IsString()
    nome: string;

    @IsString()
    endereco: string;

    @IsNumber()
    telefone: number;

    @IsEmail()
    email:string;

    disciplina: [number];
}
