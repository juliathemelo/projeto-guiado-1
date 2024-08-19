export class Curso {
    constructor(
        public id: number,
        public titulo: string,
        public professores: [number],
        public alunos: [number]
    ) {}
}
