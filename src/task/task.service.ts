import { Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TaskService {
  // constructor(private readonly cacheService: CacheService) {}

  private tasks: CreateTaskDto[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
    },
  ]

  async create(createTaskDto: CreateTaskDto) {
    this.tasks.push(createTaskDto)
    // await this.cacheService.delete('tasks')
    return createTaskDto
  }

  async findAll() {
    // const data = await this.cacheService.get<string>('tasks')

    // if (data) return data
    // await this.cacheService.set<CreateTaskDto[]>('tasks', this.tasks, '5m')

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

  async remove(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
    // await this.cacheService.delete('tasks')
  }
}
