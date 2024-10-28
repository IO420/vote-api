import { Injectable } from '@nestjs/common';
import { Vote } from './entity/vote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private voteRepository: Repository<Vote>,
  ) {}

  findAllVote() {
    const vote = this.voteRepository.find({ order:{ name:'ASC'}})
    return vote;
  }
}
