import { Column } from "typeorm"
import { DashboardTotalFarms } from "./dashboard.total-farms.entity";


export class Dashboard {
    @Column()
    totalFarms: DashboardTotalFarms;
}