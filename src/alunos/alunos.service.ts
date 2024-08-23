import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [];

  cadastro(createAlunoDto: CreateAlunoDto): Aluno {
    const newAluno = new Aluno(
      createAlunoDto.id,
      createAlunoDto.nome,
      createAlunoDto.endereco,
      createAlunoDto.telefone,
      createAlunoDto.email,
      createAlunoDto.cursos,
    );

    this.alunos.push(newAluno);
    return newAluno;
  }

  findAll(): Aluno[] {
    return this.alunos;
  }

  findOne(id: number): Aluno | undefined {
    return this.alunos.find(aluno => aluno.id === id);
  }

  update(id: number, updateAlunoDto: Partial<CreateAlunoDto>): Aluno | undefined {
    const aluno = this.findOne(id);
    if (aluno) {
      Object.assign(aluno, updateAlunoDto);
    }
    return aluno;
  }

  remove(id: number): void {
    this.alunos = this.alunos.filter(aluno => aluno.id !== id);
  }
}
