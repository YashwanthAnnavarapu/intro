import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Module({
  imports:[
    CatsModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'root',
      database:'animals',
      entities:[Cat],
      synchronize:true,
  }),
  ],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {
}
