import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCursoDto {
    @IsNumber()
    id: number;

    @IsString()
    titulo: string;

    professores: [number];

    alunos: [number];
}
