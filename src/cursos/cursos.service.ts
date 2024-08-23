import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {
  private cursos: Curso[] = [];

  matricula(createCursoDto: CreateCursoDto) {
    const newCurso = new Curso(
      createCursoDto.id,
      createCursoDto.titulo,
      createCursoDto.professores,
      createCursoDto.alunos
    );

    this.cursos.push(newCurso);
    return newCurso;
  }

  findAll() {
    return this.cursos
  }

  findOne(id: number) {
    return this.cursos.find(curso => curso.id === id);
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    const curso = this.findOne(id);
    if (curso) {
      Object.assign(curso, updateCursoDto);
    }
    return curso;
  }

  remove(id: number) {
    this.cursos = this.cursos.filter(curso => curso.id !== id);
  }
}
