import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { Cat } from './cats/entities/cat.entity';

@Module({
  imports:[
    CatsModule,
  ],
  controllers: [AppController,CatsController],
  providers: [AppService,CatsService],
})
export class AppModule {}
