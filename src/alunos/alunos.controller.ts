import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.cadastro(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alunosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(+id, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.alunosService.remove(+id);
  }
}
