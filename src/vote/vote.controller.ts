import { Controller, Get } from '@nestjs/common';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
    constructor(private readonly voteService:VoteService){}
    
    @Get()
    findAllvote(){
        return this.voteService.findAllVote()
    } 
}
