import { Pessoa } from "../../alunos/entities/pessoa.entity";

export class Professor extends Pessoa {
    constructor(
        id: number,
        nome: string,
        endereco: string,
        telefone: number,
        email:string,
        public disciplina: [number]
    ) {
        super(id, nome, endereco, telefone, email);
    }
}
