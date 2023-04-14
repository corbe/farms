import { Area } from "../../areas/entities/area.entity";
import { AreaValue } from "../../farms/entities/area.value.entity";
import { Farm } from "../../farms/entities/farm.entity";
import { ViewEntity, ViewColumn, DataSource } from "typeorm"

@ViewEntity({
    expression: (dataSource: DataSource) =>
        dataSource
            .createQueryBuilder()
            .select("COUNT(area.id)", "total")
            .addSelect("SUM(areaValue.value)", "totalArea")
            .addSelect("area.name", "area")
            .from(Farm, "farm")
            .innerJoin(AreaValue,"areaValue", "areaValue.farm.id = farm.id" )
            .innerJoin(Area,"area", "area.id = areaValue.area.id" )
            .groupBy("area.id")

})

export class DashboardTotalFarmsPlantingType { 

    @ViewColumn()
    total: number;

    @ViewColumn()
    totalArea: number;

    @ViewColumn()
    area:  string;
}