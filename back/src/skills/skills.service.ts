import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Skill } from './entities/skill.entity';
import { CreateSkillDto } from './dto/create-skill.dto';

@Injectable()
export class SkillsService {
  constructor(private dataSource: DataSource) {}

  skillsRepository() {
    return this.dataSource.getRepository(Skill);
  }

  async create(createSkill: CreateSkillDto): Promise<Skill> {
    const skill = await this.skillsRepository().save({
      name: createSkill.name,
      user: { id: createSkill.user_id },
    });

    return await this.findOne(skill.id);
  }

  async findOne(id: number): Promise<Skill> {
    return await this.skillsRepository().findOne({
      where: { id },
    });
  }

  async update(id: number, name: string): Promise<Skill> {
    await this.skillsRepository().update(id, { name });

    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.skillsRepository().delete(id);
  }
}
