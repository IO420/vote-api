import { CurrentVote } from "src/current-vote/entity/current-vote.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User{
    @PrimaryGeneratedColumn()
    id_user:number

    @Column({type:'varchar',nullable:false})
    name:string

    @Column({type:'varchar',nullable:false})
    mail:string

    @Column({type:'varchar',nullable:false})
    password:string

    @Column({type:'varchar',nullable:false})
    user_type:number

    @OneToMany(() => CurrentVote, (currentVote) => currentVote.user)
    currentVotes: CurrentVote[];
}