import { Pessoa } from "./pessoa.entity";

export class Aluno extends Pessoa {
  constructor(
    id: number,
    nome: string,
    endereco: string,
    telefone: number,
    email:string,
    public cursos: [number]
  ) {
    super(id, nome, endereco, telefone, email);
  }
}