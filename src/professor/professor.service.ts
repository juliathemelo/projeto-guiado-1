import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorService {
  private professores: Professor[] = [];

  create(createProfessorDto: CreateProfessorDto) {
    const newProfessor = new Professor(
      createProfessorDto.id,
      createProfessorDto.nome,
      createProfessorDto.endereco,
      createProfessorDto.telefone,
      createProfessorDto.email,
      createProfessorDto.disciplina,
    );

    this.professores.push(newProfessor);
    return newProfessor;
  }

  findAll() {
    return this.professores;
  }

  findOne(id: number) {
    return this.professores.find(professor => professor.id === id);
  }

  update(id: number, updateProfessorDto: UpdateProfessorDto) {
    const professor = this.findOne(id);
    if (professor) {
      Object.assign(professor, updateProfessorDto);
    }
    return professor;
  }

  remove(id: number) {
    this.professores = this.professores.filter(professor => professor.id !== id);
  }
}
