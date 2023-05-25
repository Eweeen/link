import { config } from 'dotenv';
import { Relation } from 'src/relations/entities/relation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

config({ path: 'encrypt-db.env' });

@Entity('relations-states')
export class RelationState {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
  id: number;

  @Column({
    name: 'label',
    type: 'varchar',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.RELATION_STATE_LABEL_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.RELATION_STATE_LABEL_ENCRYPTION_IV,
    }),
  })
  label: string;

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
  @OneToMany(() => Relation, (relation) => relation.state)
  relations: Relation[];
}
