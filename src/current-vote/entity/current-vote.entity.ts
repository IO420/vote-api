import { User } from "src/user/entity/user.entity";
import { Vote } from "src/vote/entity/vote.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'current_vote'})
export class CurrentVote{
    @PrimaryGeneratedColumn()
    id_current_vote:number

    @Column({ type: 'int', nullable: false })
    id_user: number;
  
    @Column({ type: 'int', nullable: false })
    id_vote: number;

    @ManyToOne(() => User, (user) => user.currentVotes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_user' })
    user: User;
  
    @ManyToOne(() => Vote, (vote) => vote.currentVotes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_vote' })
    vote: Vote;

}
