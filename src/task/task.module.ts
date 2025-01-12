import { Module } from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskController } from './task.controller'
import { Cacheable } from 'cacheable'
import KeyvRedis from '@keyv/redis'
import { CacheService } from './cache.service'

@Module({
  controllers: [TaskController],
  providers: [
    TaskService,
    CacheService,
    {
      provide: 'CACHE_INSTANCE',
      useFactory: () => {
        const secondary = new KeyvRedis('redis://3.83.146.231:6379')

        // const secondary = new KeyvRedis('redis://localhost:6379')
        return new Cacheable({ secondary, ttl: '4h' })
      },
    },
  ],
  exports: ['CACHE_INSTANCE'],
})
export class TaskModule {}
