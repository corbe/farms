import { IsUnique } from "@youba/nestjs-dbvalidator";
import { IsNotEmpty, Validate } from "class-validator";

export class CreateAreaDto {
    @IsNotEmpty()
    @Validate(IsUnique,[ { table: "area", column: "name" }])
    name: string;

    id?: number;
}