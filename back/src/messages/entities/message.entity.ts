import { config } from 'dotenv';
import { User } from 'src/users/entities/user.entity';
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

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
  id: number;

  @Column({
    name: 'message',
    type: 'text',
    nullable: false,
    transformer: new EncryptionTransformer({
      key: process.env.MESSAGE_MESSAGE_ENCRYPTION_KEY,
      algorithm: process.env.ENCRYPTION_ALGORITHM,
      ivLength: +process.env.ENCRYPTION_IV_LENGTH,
      iv: process.env.MESSAGE_MESSAGE_ENCRYPTION_IV,
    }),
  })
  message: string;

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
  @ManyToOne(() => User, (user) => user.messages_sender)
  @JoinColumn({ name: 'sender_id' })
  sender: User;

  @ManyToOne(() => User, (user) => user.messages_receiver)
  @JoinColumn({ name: 'receiver_id' })
  receiver: User;

  //+++++++++++++++
  // One To One
  //+++++++++++++++

  //+++++++++++++++
  // One To Many
  //+++++++++++++++
}
