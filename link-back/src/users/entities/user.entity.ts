import { config } from 'dotenv';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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
    transformer: new EncryptionTransformer({
      key: process.env.USER_IMAGE_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_IMAGE_ENCRYPTION_IV,
    }),
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
    name: 'zip',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.USER_ZIP_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.USER_ZIP_ENCRYPTION_IV,
    }),
  })
  zip: string;

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

  //+++++++++++++++
  // One To One
  //+++++++++++++++

  //+++++++++++++++
  // One To Many
  //+++++++++++++++
}
