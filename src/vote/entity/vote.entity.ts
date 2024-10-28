import { CurrentVote } from "src/current-vote/entity/current-vote.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'vote'})
export class Vote{

    @PrimaryGeneratedColumn()
    id_vote:string

    @Column({type:'varchar',nullable:false})
    name:string

    @OneToMany(() => CurrentVote, (currentVote) => currentVote.user)
    currentVotes: CurrentVote[];

}
