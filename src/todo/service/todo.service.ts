import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async getAllTodo(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }
  async getTodo(id: number): Promise<Todo | null> {
    return this.prisma.todo.findUnique({ where: { id: Number(id) } });
  }
  async createTodo(data: Todo): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }
  async updateTodo(id: number): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id: Number(id) },
      data: { completed: true },
    });
  }
  async deleteTodo(id: number): Promise<Todo> {
    return this.prisma.todo.delete({
      where: { id: Number(id) },
    });
  }
}
