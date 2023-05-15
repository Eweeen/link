import { config } from 'dotenv';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

config({ path: 'encrypt-db.env' });

@Entity('professions')
export class Profession {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.PROFESSION_NAME_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.PROFESSION_NAME_ENCRYPTION_IV,
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
  @OneToOne(() => Profession, (profession) => profession.id, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parent_id' })
  parent: Profession;

  //+++++++++++++++
  // One To Many
  //+++++++++++++++
  @OneToMany(() => User, (user) => user.profession)
  users: User[];
}
