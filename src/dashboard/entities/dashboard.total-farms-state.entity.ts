import { Farm } from "../../farms/entities/farm.entity";
import { ViewEntity, ViewColumn, DataSource } from "typeorm"

@ViewEntity({
    expression: (dataSource: DataSource) =>
        dataSource
            .createQueryBuilder()
            .select("COUNT(farm.state)", "farms")
            .addSelect("SUM(farm.totalArea)", "totalArea")
            .addSelect("farm.state", "state")
            .from(Farm, "farm")
            .groupBy("farm.state")

})

export class DashboardTotalFarmsState { 

    @ViewColumn()
    farms: number;

    @ViewColumn()
    totalArea: number;

    @ViewColumn()
    state:  string;
}