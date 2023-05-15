import { config } from 'dotenv';
import { GenreUser } from 'src/genres-users/entities/genre-user.entity';
import { Inspiration } from 'src/inspirations/entities/inspiration.entity';
import { Profession } from 'src/professions/entities/profession.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Skill } from 'src/skills/entities/skill.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

config({ path: 'encrypt-db.env' });

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
  id: number;

  @Column({
    name: 'lastname',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.USER_LASTNAME_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_LASTNAME_ENCRYPTION_IV,
    }),
  })
  lastname: string;

  @Column({
    name: 'firstname',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.USER_FIRSTNAME_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_FIRSTNAME_ENCRYPTION_IV,
    }),
  })
  firstname: string;

  @Column({
    name: 'username',
    type: 'varchar',
    unique: true,
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.USER_USERNAME_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_USERNAME_ENCRYPTION_IV,
    }),
  })
  username: string;

  @Column({
    name: 'short_description',
    type: 'varchar',
    nullable: true,
    transformer: new EncryptionTransformer({
      key: process.env.USER_SHORT_DESCRIPTION_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_SHORT_DESCRIPTION_ENCRYPTION_IV,
    }),
  })
  short_description: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: true,
    transformer: new EncryptionTransformer({
      key: process.env.USER_DESCRIPTION_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_DESCRIPTION_ENCRYPTION_IV,
    }),
  })
  description: string;

  @Column({
    name: 'email',
    type: 'varchar',
    unique: true,
    transformer: new EncryptionTransformer({
      key: process.env.USER_EMAIL_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_EMAIL_ENCRYPTION_IV,
    }),
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    select: false,
    transformer: new EncryptionTransformer({
      key: process.env.USER_PASSWORD_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_PASSWORD_ENCRYPTION_IV,
    }),
  })
  password: string;

  @Column({
    name: 'image',
    type: 'varchar',
    nullable: false,
    default: new EncryptionTransformer({
      key: process.env.USER_IMAGE_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_IMAGE_ENCRYPTION_IV,
    }).to('default.webp'),
  })
  image: string;

  @Column({
    name: 'birth_date',
    type: 'date',
    nullable: false,
  })
  birth_date: Date;

  @Column({
    name: 'city',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.USER_CITY_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_CITY_ENCRYPTION_IV,
    }),
  })
  city: string;

  @Column({
    name: 'color',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.USER_COLOR_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_COLOR_ENCRYPTION_IV,
    }),
  })
  color: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  //====================================================
  // Relations
  //====================================================

  //+++++++++++++++
  // Many To One
  //+++++++++++++++
  @ManyToOne(() => Role, (role) => role.users, {
    nullable: false,
  })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Profession, (profession) => profession.users, {
    nullable: false,
  })
  @JoinColumn({ name: 'profession_id' })
  profession: Profession;

  //+++++++++++++++
  // One To One
  //+++++++++++++++

  //+++++++++++++++
  // One To Many
  //+++++++++++++++
  @OneToMany(() => GenreUser, (genreUser) => genreUser.genre)
  genreUsers: GenreUser[];

  @OneToMany(() => Skill, (skill) => skill.user)
  skills: Skill[];

  @OneToMany(() => Inspiration, (inspiration) => inspiration.user)
  inspirations: Inspiration[];
}
