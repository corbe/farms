import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
import { Farm } from 'src/farms/entities/farm.entity';
  
  @ValidatorConstraint({ name: 'areasValidator', async: false })
  export class areasValidator implements ValidatorConstraintInterface {

    validate(farms: Farm[], args: ValidationArguments) {    
      let error = true;
      farms.forEach(element => {
        if (element.areas){
          let totalArableArea = element.areas
          .map(c => c.value)
          .reduce((sum, current) => sum + current);
          if ( (totalArableArea + element.totalVegetationArea) > element.totalArea){
            error = false;
          } else {
            element.totalArableArea = totalArableArea;
          }
        }
      })

      return error;
    }
  
    defaultMessage() {
      return 'The sum of arable area and vegetation must not be greater than the total area of ​​the farm.';
    }
  }