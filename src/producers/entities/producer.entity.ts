import { Farm } from '../../farms/entities/farm.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import PersonType from '../enums/person-type.enum';


@Entity()
export class Producer {

    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column({
        type: "enum",
        enum: PersonType,
        default: PersonType.F,
    })
    personType?: PersonType

    @Column()
    name: string;

    @Column()
    document: string;

    @ManyToMany(() => Farm, (farm: Farm) => farm.producers,  {
        cascade: true
    })
    @JoinTable()
    public farms: Farm[];
}