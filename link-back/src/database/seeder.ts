import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { Role } from 'src/roles/entities/role.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class SeederCommand {
  constructor(private dataSource: DataSource) {}

  @Command({
    command: 'seed',
    describe: 'Seeds the database',
  })
  async seed() {
    try {
      // Seed roles
      const rolesRepository = this.dataSource.getRepository(Role);
      await rolesRepository.save({
        id: 1,
        label: 'admin',
      });
      await rolesRepository.save({
        id: 2,
        label: 'moderator',
      });
      await rolesRepository.save({
        id: 3,
        label: 'user',
      });
    } catch (e) {
      console.log(e);
    }
  }
}
