import { config } from 'dotenv';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

config({ path: 'encrypt-db.env' });

@Entity('portfolios')
export class Portfolio {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
  id: number;

  @Column({
    name: 'title',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.PORTFOLIO_TITLE_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.PORTFOLIO_TITLE_ENCRYPTION_IV,
    }),
  })
  title: string;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.PORTFOLIO_DESCRIPTION_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.PORTFOLIO_DESCRIPTION_ENCRYPTION_IV,
    }),
  })
  description: string;

  @Column({
    name: 'type',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.PORTFOLIO_TYPE_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.PORTFOLIO_TYPE_ENCRYPTION_IV,
    }),
  })
  type: string;

  @Column({
    name: 'path',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.PORTFOLIO_PATH_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.PORTFOLIO_PATH_ENCRYPTION_IV,
    }),
  })
  path: string;

  //====================================================
  // Relations
  //====================================================

  //+++++++++++++++
  // Many To One
  //+++++++++++++++
  @ManyToOne(() => User, (user) => user.portfolios, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  //+++++++++++++++
  // One To One
  //+++++++++++++++

  //+++++++++++++++
  // One To Many
  //+++++++++++++++
}
