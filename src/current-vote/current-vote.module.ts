import { Module } from '@nestjs/common';
import { CurrentVoteController } from './current-vote.controller';
import { CurrentVoteService } from './current-vote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrentVote } from './entity/current-vote.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CurrentVote])],
  controllers: [CurrentVoteController],
  providers: [CurrentVoteService],
  exports:[CurrentVoteService]
})
export class CurrentVoteModule {}
