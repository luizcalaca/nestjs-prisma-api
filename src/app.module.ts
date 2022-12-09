import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './tod/controller/todo.controller';

@Module({
  imports: [TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
