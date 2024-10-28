import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrentVote } from './entity/current-vote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrentVoteService {
    constructor(
        @InjectRepository(CurrentVote)
        private currentVoteRepository: Repository<CurrentVote>,
){}

    findAllCurrentVotes(){
        const currentVotes = this.currentVoteRepository.find({order:{id_current_vote:'DESC'}})
        return currentVotes
    }
}
