import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Area {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column({ unique: true })
    name?: string;
}