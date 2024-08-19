import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateAlunoDto {
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

    cursos: [number];
}
