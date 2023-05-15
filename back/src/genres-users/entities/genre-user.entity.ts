import { Genre } from 'src/genres/entities/genre.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genres-users')
export class GenreUser {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
  id: number;

  //====================================================
  // Relations
  //====================================================

  //+++++++++++++++
  // Many To One
  //+++++++++++++++
  @ManyToOne(() => Genre, (genre) => genre.genreUsers, {
    nullable: false,
  })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;

  @ManyToOne(() => User, (user) => user.genreUsers, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  //+++++++++++++++
  // One To One
  //+++++++++++++++

  //+++++++++++++++
  // One To Many
  //+++++++++++++++
}
