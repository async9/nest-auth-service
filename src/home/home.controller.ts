import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('users')
  async getAllUsers() {
    return await this.homeService.getAllUsers();
  }
}
