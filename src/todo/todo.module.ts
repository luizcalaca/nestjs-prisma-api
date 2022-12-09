import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { TodoController } from './controller/todo.controller';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
