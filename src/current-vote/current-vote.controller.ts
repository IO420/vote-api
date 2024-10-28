import { Controller, Get } from '@nestjs/common';
import { CurrentVoteService } from './current-vote.service';

@Controller('currentVote')
export class CurrentVoteController {
    constructor(private readonly currentVoteService:CurrentVoteService){}

    @Get()
    findAllCurrentVotes(){
        return this.currentVoteService.findAllCurrentVotes()
    } 
}
