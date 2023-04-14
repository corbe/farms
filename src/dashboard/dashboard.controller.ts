import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';


@Controller({path: 'dashboard', version:'1'})
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  findAll() {    
    return this.dashboardService.findAll();
  }
 
}