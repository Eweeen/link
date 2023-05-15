import { config } from 'dotenv';
import { GenreUser } from 'src/genres-users/entities/genre-user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

config({ path: 'encrypt-db.env' });

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.GENRE_NAME_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.GENRE_NAME_ENCRYPTION_IV,
    }),
  })
  name: string;

  //====================================================
  // Relations
  //====================================================

  //+++++++++++++++
  // Many To One
  //+++++++++++++++

  //+++++++++++++++
  // One To One
  //+++++++++++++++

  //+++++++++++++++
  // One To Many
  //+++++++++++++++
  @OneToMany(() => GenreUser, (genreUser) => genreUser.genre)
  genreUsers: GenreUser[];
}
