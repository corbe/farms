import { Transform } from "class-transformer";
import { IsNotEmpty, Validate } from "class-validator";
import { Farm } from "src/farms/entities/farm.entity";

import PersonType from "../enums/person-type.enum";
import documentTransform from "../utils/document-transform";
import { areasValidator } from "../validators/areas";
import { documentValidator } from "../validators/document";

export class CreateProducerDto {
    id?: number;
    
    personType?: PersonType;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @Validate(documentValidator)
    @Transform(({ value }) => documentTransform(value))
    document: string;
    
    @Validate(areasValidator)
    farms: Farm[];
}