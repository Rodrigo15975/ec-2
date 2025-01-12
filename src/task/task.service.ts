import { Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TaskService {
  private tasks: CreateTaskDto[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
    },
  ]

  create(createTaskDto: CreateTaskDto) {
    this.tasks.push(createTaskDto)
    return createTaskDto
  }

  findAll() {
    return this.tasks
  }

  findOne(id: string) {
    return this.tasks.find((task) => task.id === id)
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = this.tasks.find((task) => task.id === id)
    Object.assign(task, updateTaskDto)
    return task
  }

  remove(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
