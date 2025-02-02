import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    model: string;

    @Column()
    yearOfMake: number;


    @Column({ default: true })
    isActive: boolean;
}