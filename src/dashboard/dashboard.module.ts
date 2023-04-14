import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Dashboard } from './entities/dashboard.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardTotalFarms } from './entities/dashboard.total-farms.entity';
import { DashboardTotalFarmsState } from './entities/dashboard.total-farms-state.entity';
import { DashboardTotalFarmsPlantingType } from './entities/dashboard.total-farms-planting-type.entity';
import { DashboardTotalFarmsAreaType } from './entities/dashboard.total-farms-area-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Dashboard,
    DashboardTotalFarms, 
    DashboardTotalFarmsState,
    DashboardTotalFarmsPlantingType,
    DashboardTotalFarmsAreaType
  ])],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
