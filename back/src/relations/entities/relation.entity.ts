import { RelationState } from 'src/relations-states/entities/relations-state.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('relations')
export class Relation {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
  id: number;

  //====================================================
  // Relations
  //====================================================

  //+++++++++++++++
  // Many To One
  //+++++++++++++++
  @ManyToOne(() => User, (user) => user.relations_sender, {
    nullable: false,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'sender_id' })
  sender: User;

  @ManyToOne(() => User, (user) => user.relations_receiver, {
    nullable: false,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'receiver_id' })
  receiver: User;

  @ManyToOne(() => RelationState, (state) => state.relations, {
    nullable: false,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'state_id' })
  state: RelationState;

  //+++++++++++++++
  // One To One
  //+++++++++++++++

  //+++++++++++++++
  // One To Many
  //+++++++++++++++
}
