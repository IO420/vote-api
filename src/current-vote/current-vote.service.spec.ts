import { Test, TestingModule } from '@nestjs/testing';
import { CurrentVoteService } from './current-vote.service';

describe('CurrentVoteService', () => {
  let service: CurrentVoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrentVoteService],
    }).compile();

    service = module.get<CurrentVoteService>(CurrentVoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
