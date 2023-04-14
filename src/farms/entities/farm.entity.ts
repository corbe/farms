import { Producer } from '../../producers/entities/producer.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AreaValue } from './area.value.entity';

@Entity()
export class Farm {

    @PrimaryGeneratedColumn('increment')
    id?: number;
   
    @Column()
    name: string;
    
    @Column({default:0})
    totalArea: number;

    @Column({default:0})    
    totalArableArea?: number;

    @Column({default:0})
    totalVegetationArea: number;

    @Column()
    city: string;
    
    @Column()
    state: string;

    @OneToMany(() => AreaValue, (area: AreaValue) => area.farm,
    {
        cascade: true
    })
    public areas?: AreaValue[];

    @ManyToMany(() => Producer, (producers: Producer) => producers.farms,
    {
        onDelete: 'CASCADE'
    })
    public producers?: Producer[];

   
}