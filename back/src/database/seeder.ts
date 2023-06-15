import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { GenreUser } from 'src/genres-users/entities/genre-user.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { Inspiration } from 'src/inspirations/entities/inspiration.entity';
import { Profession } from 'src/professions/entities/profession.entity';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
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
      // Seed users
      const usersRepository = this.dataSource.getRepository(User);
      await usersRepository.save({
        id: 1,
        lastname: 'Léger',
        firstname: 'Kilian',
        username: 'Kilian',
        email: 'kilian.leger@my-digital-school.org',
        password:
          '$2a$10$M0Igw6LpNdiBwWgfnWeL.ezTg7Oj7ze/b2j0ZFs8I34fnT3TR9ARi',
        short_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur ab corrupti at sed et?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus voluptates iste maxime, quis dicta doloribus laudantium officiis excepturi sint nostrum, deserunt magni? Exercitationem itaque excepturi laboriosam vel id tempore officiis optio recusandae nihil. Suscipit officiis, odio ipsam ea modi similique distinctio quo doloremque possimus sunt iste fugit quos tempore unde odit quaerat a nesciunt dicta repellendus id repellat quibusdam voluptates saepe quasi! Quasi magni quo odio quae suscipit ipsum.',
        birth_date: new Date('2000-01-01'),
        city: 'Rennes',
        color: '#000000',
        role: { id: 3 },
        profession: { id: 5 },
      });
      await usersRepository.save({
        id: 2,
        lastname: 'Cirillo',
        firstname: 'Logan',
        username: 'Logan',
        email: 'logan.cirillo@my-digital-school.org',
        password:
          '$2a$10$M0Igw6LpNdiBwWgfnWeL.ezTg7Oj7ze/b2j0ZFs8I34fnT3TR9ARi',
        short_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur ab corrupti at sed et?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus voluptates iste maxime, quis dicta doloribus laudantium officiis excepturi sint nostrum, deserunt magni? Exercitationem itaque excepturi laboriosam vel id tempore officiis optio recusandae nihil. Suscipit officiis, odio ipsam ea modi similique distinctio quo doloremque possimus sunt iste fugit quos tempore unde odit quaerat a nesciunt dicta repellendus id repellat quibusdam voluptates saepe quasi! Quasi magni quo odio quae suscipit ipsum.',
        birth_date: new Date('2000-01-01'),
        city: 'Rennes',
        color: '#000000',
        role: { id: 3 },
        profession: { id: 5 },
      });
      await usersRepository.save({
        id: 3,
        lastname: 'Morel',
        firstname: 'Clément',
        username: 'Clément',
        email: 'clement.morel@my-digital-school.org',
        password:
          '$2a$10$M0Igw6LpNdiBwWgfnWeL.ezTg7Oj7ze/b2j0ZFs8I34fnT3TR9ARi',
        short_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur ab corrupti at sed et?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus voluptates iste maxime, quis dicta doloribus laudantium officiis excepturi sint nostrum, deserunt magni? Exercitationem itaque excepturi laboriosam vel id tempore officiis optio recusandae nihil. Suscipit officiis, odio ipsam ea modi similique distinctio quo doloremque possimus sunt iste fugit quos tempore unde odit quaerat a nesciunt dicta repellendus id repellat quibusdam voluptates saepe quasi! Quasi magni quo odio quae suscipit ipsum.',
        birth_date: new Date('2000-01-01'),
        city: 'Rennes',
        color: '#000000',
        role: { id: 3 },
        profession: { id: 2 },
      });
      await usersRepository.save({
        id: 4,
        lastname: 'Ranarisoa',
        firstname: 'Yannick',
        username: 'Yannick',
        email: 'yannick.ranarisoa@my-digital-school.org',
        password:
          '$2a$10$M0Igw6LpNdiBwWgfnWeL.ezTg7Oj7ze/b2j0ZFs8I34fnT3TR9ARi',
        short_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur ab corrupti at sed et?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus voluptates iste maxime, quis dicta doloribus laudantium officiis excepturi sint nostrum, deserunt magni? Exercitationem itaque excepturi laboriosam vel id tempore officiis optio recusandae nihil. Suscipit officiis, odio ipsam ea modi similique distinctio quo doloremque possimus sunt iste fugit quos tempore unde odit quaerat a nesciunt dicta repellendus id repellat quibusdam voluptates saepe quasi! Quasi magni quo odio quae suscipit ipsum.',
        birth_date: new Date('2000-01-01'),
        city: 'Rennes',
        color: '#000000',
        role: { id: 3 },
        profession: { id: 2 },
      });
      await usersRepository.save({
        id: 5,
        lastname: 'Rousseau',
        firstname: 'Côme',
        username: 'Côme',
        email: 'come.rousseau@my-digital-school.org',
        password:
          '$2a$10$M0Igw6LpNdiBwWgfnWeL.ezTg7Oj7ze/b2j0ZFs8I34fnT3TR9ARi',
        short_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur ab corrupti at sed et?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus voluptates iste maxime, quis dicta doloribus laudantium officiis excepturi sint nostrum, deserunt magni? Exercitationem itaque excepturi laboriosam vel id tempore officiis optio recusandae nihil. Suscipit officiis, odio ipsam ea modi similique distinctio quo doloremque possimus sunt iste fugit quos tempore unde odit quaerat a nesciunt dicta repellendus id repellat quibusdam voluptates saepe quasi! Quasi magni quo odio quae suscipit ipsum.',
        birth_date: new Date('2000-01-01'),
        city: 'Rennes',
        color: '#000000',
        role: { id: 3 },
        profession: { id: 3 },
      });
      await usersRepository.save({
        id: 6,
        lastname: 'Hervé',
        firstname: 'Ewen',
        username: 'Ewen',
        email: 'ewen.herve@my-digital-school.org',
        password:
          '$2a$10$M0Igw6LpNdiBwWgfnWeL.ezTg7Oj7ze/b2j0ZFs8I34fnT3TR9ARi',
        short_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur ab corrupti at sed et?',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus voluptates iste maxime, quis dicta doloribus laudantium officiis excepturi sint nostrum, deserunt magni? Exercitationem itaque excepturi laboriosam vel id tempore officiis optio recusandae nihil. Suscipit officiis, odio ipsam ea modi similique distinctio quo doloremque possimus sunt iste fugit quos tempore unde odit quaerat a nesciunt dicta repellendus id repellat quibusdam voluptates saepe quasi! Quasi magni quo odio quae suscipit ipsum.',
        birth_date: new Date('2000-01-01'),
        city: 'Rennes',
        color: '#000000',
        role: { id: 3 },
        profession: { id: 1 },
      });
      // Seed genres users
      const genresUsersRepository = this.dataSource.getRepository(GenreUser);
      await genresUsersRepository.save({
        id: 1,
        genre: { id: 2 },
        user: { id: 1 },
      });
      await genresUsersRepository.save({
        id: 2,
        genre: { id: 2 },
        user: { id: 2 },
      });
      await genresUsersRepository.save({
        id: 3,
        genre: { id: 2 },
        user: { id: 3 },
      });
      await genresUsersRepository.save({
        id: 4,
        genre: { id: 2 },
        user: { id: 4 },
      });
      await genresUsersRepository.save({
        id: 5,
        genre: { id: 2 },
        user: { id: 5 },
      });
      await genresUsersRepository.save({
        id: 6,
        genre: { id: 2 },
        user: { id: 6 },
      });
      // Seed inspirations
      const inspirationsRepository = this.dataSource.getRepository(Inspiration);
      await inspirationsRepository.save({
        id: 1,
        name: 'Kurt Cobain',
        user: { id: 1 },
      });
      await inspirationsRepository.save({
        id: 2,
        name: 'Josman',
        user: { id: 2 },
      });
      await inspirationsRepository.save({
        id: 3,
        name: 'Nekfeu',
        user: { id: 3 },
      });
      await inspirationsRepository.save({
        id: 4,
        name: 'Eminem',
        user: { id: 4 },
      });
      await inspirationsRepository.save({
        id: 5,
        name: 'Kaaris',
        user: { id: 5 },
      });
      await inspirationsRepository.save({
        id: 6,
        name: 'Damso',
        user: { id: 6 },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
