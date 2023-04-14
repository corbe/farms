import { IsNotEmpty, Validate } from "class-validator";
import { AreaValue } from "src/farms/entities/area.value.entity";
import { areasValidator } from "../validators/areas";

export class CreateFarmDto {
    id?: number;
    
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    @Validate(areasValidator)
    totalArea: number;
    
    totalArableArea?: number;

    @IsNotEmpty()
    totalVegetationArea: number;

    areas?: AreaValue[];
}