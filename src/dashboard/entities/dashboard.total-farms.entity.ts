import { Farm } from "../../farms/entities/farm.entity";
import { ViewEntity, ViewColumn, DataSource } from "typeorm"

@ViewEntity({
    expression: (dataSource: DataSource) =>
        dataSource
            .createQueryBuilder()
            .select("COUNT(farm.id)", "totalFarms")
            .addSelect("SUM(farm.totalArea)", "totalArea")
            .from(Farm, "farm")

})

export class DashboardTotalFarms { 

    @ViewColumn()
    totalFarms: number;

    @ViewColumn()
    totalArea: number;
}