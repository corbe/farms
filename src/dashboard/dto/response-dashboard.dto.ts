import { DashboardTotalFarmsAreaType } from "../entities/dashboard.total-farms-area-type.entity";
import { DashboardTotalFarmsPlantingType } from "../entities/dashboard.total-farms-planting-type.entity";
import { DashboardTotalFarmsState } from "../entities/dashboard.total-farms-state.entity";
import { DashboardTotalFarms } from "../entities/dashboard.total-farms.entity";

export class ResponseDashboardDto {

    farms: DashboardTotalFarms;
    farmsByState: DashboardTotalFarmsState[];
    farmsByPlantingType: DashboardTotalFarmsPlantingType[];
    farmsByAreaType: DashboardTotalFarmsAreaType;
    
}
