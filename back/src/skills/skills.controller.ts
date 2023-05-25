import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { Skill } from './entities/skill.entity';

@ApiTags('Skills')
@Controller({ version: '1', path: 'skills' })
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  async create(@Body() createSkill: CreateSkillDto): Promise<Skill> {
    return await this.skillsService.create(createSkill);
  }

  @Post(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createSkill: CreateSkillDto,
  ): Promise<Skill> {
    return await this.skillsService.update(+id, createSkill.name);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.skillsService.remove(+id);
  }
}
