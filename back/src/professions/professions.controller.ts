import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProfessionsService } from './professions.service';

@ApiTags('Professions')
@Controller({ version: '1', path: 'professions' })
export class ProfessionsController {
  constructor(private readonly professionsService: ProfessionsService) {}

  @Get()
  async findAll() {
    return await this.professionsService.findAll();
  }
}
