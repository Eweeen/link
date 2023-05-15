import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreUser } from 'src/genres-users/entities/genre-user.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { Inspiration } from 'src/inspirations/entities/inspiration.entity';
import { Profession } from 'src/professions/entities/profession.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Skill } from 'src/skills/entities/skill.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        extra: {
          socketPath: process.env.DB_SOCKET,
        },
        // Put in entities every entity of the application
        entities: [
          Role,
          User,
          Profession,
          Genre,
          GenreUser,
          Skill,
          Inspiration,
        ],
        subscribers: [],
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
