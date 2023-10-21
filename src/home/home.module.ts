import { Module } from '@nestjs/common';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
