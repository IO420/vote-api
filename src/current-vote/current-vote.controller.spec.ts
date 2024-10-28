import { Test, TestingModule } from '@nestjs/testing';
import { CurrentVoteController } from './current-vote.controller';

describe('CurrentVoteController', () => {
  let controller: CurrentVoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentVoteController],
    }).compile();

    controller = module.get<CurrentVoteController>(CurrentVoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
