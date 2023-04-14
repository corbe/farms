import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { CreateProducerDto } from '../dto/create-producer.dto';
import PersonType from '../enums/person-type.enum';
  
  @ValidatorConstraint({ name: 'documentValidator', async: false })
  export class documentValidator implements ValidatorConstraintInterface {

    validate(document: string, args: ValidationArguments) {

        const data = args.object as CreateProducerDto;
        if (cpf.isValid(document)){            
            data.personType = PersonType.F;
            return true;
        }

        if (cnpj.isValid(document)){
            data.personType = PersonType.J;
            return true;
        }
            
        return false;
    }
  
    defaultMessage() {
      return 'invalid document';
    }
  }