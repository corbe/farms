import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseDashboardDto } from './dto/response-dashboard.dto';
import { DashboardTotalFarmsAreaType } from './entities/dashboard.total-farms-area-type.entity';
import { DashboardTotalFarmsPlantingType } from './entities/dashboard.total-farms-planting-type.entity';
import { DashboardTotalFarmsState } from './entities/dashboard.total-farms-state.entity';
import { DashboardTotalFarms } from './entities/dashboard.total-farms.entity';

@Injectable()
export class DashboardService {

  constructor(
    @InjectRepository(DashboardTotalFarms)
    private dashboardTotalFarms: Repository<DashboardTotalFarms>,

    @InjectRepository(DashboardTotalFarmsState)
    private dashboardTotalFarmsState: Repository<DashboardTotalFarmsState>,

    @InjectRepository(DashboardTotalFarmsPlantingType)
    private dashboardTotalFarmsPlantingType: Repository<DashboardTotalFarmsPlantingType>,

    @InjectRepository(DashboardTotalFarmsAreaType)
    private dashboardTotalFarmsAreaType: Repository<DashboardTotalFarmsAreaType>
  ) {}
 

  async findAll() {
    const responseDashboard = new ResponseDashboardDto();
    responseDashboard.farms  = await this.dashboardTotalFarms.findOneBy({});
    responseDashboard.farmsByState  = await this.dashboardTotalFarmsState.find();
    responseDashboard.farmsByPlantingType  = await this.dashboardTotalFarmsPlantingType.find();
    responseDashboard.farmsByAreaType = await this.dashboardTotalFarmsAreaType.findOneBy({});
    return responseDashboard;
  }
  
}
