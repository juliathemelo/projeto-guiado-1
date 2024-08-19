import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessorModule } from './professor/professor.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [AlunosModule, ProfessorModule, CursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
