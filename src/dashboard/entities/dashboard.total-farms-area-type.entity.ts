import { Farm } from "../../farms/entities/farm.entity";
import { ViewEntity, ViewColumn, DataSource } from "typeorm"

@ViewEntity({
    expression: (dataSource: DataSource) =>
        dataSource
            .createQueryBuilder()
            .select("SUM(farm.totalArableArea)", "totalArableArea")
            .addSelect("SUM(farm.totalVegetationArea)", "totalVegetationArea")
            .from(Farm, "farm")

})

export class DashboardTotalFarmsAreaType { 

    @ViewColumn()
    totalArableArea: number;
    
    @ViewColumn()
    totalVegetationArea: number;
}