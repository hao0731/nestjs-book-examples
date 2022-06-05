import { Test, TestingModule } from '@nestjs/testing';
import { CopyTodoController } from './copy-todo.controller';

describe('CopyTodoController', () => {
  let controller: CopyTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CopyTodoController],
    }).compile();

    controller = module.get<CopyTodoController>(CopyTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
