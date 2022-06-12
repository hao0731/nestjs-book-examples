import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './decorators/roles.decorator';
import { RoleGuard } from './guards/role.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
