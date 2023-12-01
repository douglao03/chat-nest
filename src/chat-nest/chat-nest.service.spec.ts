import { Test, TestingModule } from '@nestjs/testing';
import { ChatNestService } from './chat-nest.service';

describe('ChatNestService', () => {
  let service: ChatNestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatNestService],
    }).compile();

    service = module.get<ChatNestService>(ChatNestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
