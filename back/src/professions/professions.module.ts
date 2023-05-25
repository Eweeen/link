import { Module } from '@nestjs/common';
import { ProfessionsService } from './professions.service';
import { ProfessionsController } from './professions.controller';

@Module({
  imports: [],
  providers: [ProfessionsService],
  exports: [ProfessionsService],
  controllers: [ProfessionsController],
})
export class ProfessionsModule {}
