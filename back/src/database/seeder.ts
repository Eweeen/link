import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { Genre } from 'src/genres/entities/genre.entity';
import { Profession } from 'src/professions/entities/profession.entity';
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
      // Seed professions
      const professionsRepository = this.dataSource.getRepository(Profession);
      await professionsRepository.save({
        id: 1,
        name: 'Chanteur',
        parent_id: null,
      });
      await professionsRepository.save({
        id: 2,
        name: 'Musicien',
        parent_id: null,
      });
      await professionsRepository.save({
        id: 3,
        name: 'Beatmaker',
        parent_id: null,
      });
      await professionsRepository.save({
        id: 4,
        name: 'Clipper - Monteur',
        parent_id: null,
      });
      await professionsRepository.save({
        id: 5,
        name: 'Graphiste',
        parent_id: null,
      });
      // Seed genres
      const genresRepository = this.dataSource.getRepository(Genre);
      await genresRepository.save({
        id: 1,
        name: 'Rock / Metal',
      });
      await genresRepository.save({
        id: 2,
        name: "Rap / r'n'b / Pop / Slam",
      });
      await genresRepository.save({
        id: 3,
        name: 'Blues / Jazz / Soul',
      });
      await genresRepository.save({
        id: 4,
        name: 'Reggae / Ska / Dub',
      });
      await genresRepository.save({
        id: 5,
        name: 'Electro / Techno / House',
      });
      await genresRepository.save({
        id: 6,
        name: 'Kpop / Jpop',
      });
      await genresRepository.save({
        id: 7,
        name: 'Classique',
      });
    } catch (e) {
      console.log(e);
    }
  }
}
