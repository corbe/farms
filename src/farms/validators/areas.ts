import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
import { CreateFarmDto } from '../dto/create-farm.dto';
  
  @ValidatorConstraint({ name: 'areasValidator', async: false })
  export class areasValidator implements ValidatorConstraintInterface {


    validate(totalArea: number, args: ValidationArguments) {

      const data = args.object as CreateFarmDto;
      //sum areas 
      const totalArableArea = data.areas
        .map(c => c.value)
        .reduce((sum, current) => sum + current);

      if ( (totalArableArea + data.totalVegetationArea) <= data.totalArea){
        data.totalArableArea = totalArableArea;
        return true;
      }
      else{
        return false;
      }        
    }
  
    defaultMessage() {
      return 'The sum of arable area and vegetation must not be greater than the total area of ​​the farm.';
    }
  }