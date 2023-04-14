import { Farm } from './farm.entity';
import { Column, Entity,  ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Area } from '../../areas/entities/area.entity';

@Entity()
export class AreaValue {
    @PrimaryGeneratedColumn('increment')
    id?: number;

    @ManyToOne(() => Area, (area: Area) => area)
    area: Area;

    @ManyToOne(() => Farm, (farm: Farm) => farm.areas,{
        onDelete: 'CASCADE',
    })
    farm?: Farm;

    @Column()
    value: number;
}