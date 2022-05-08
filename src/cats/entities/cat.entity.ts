import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class Cat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    age: number;

    @Column()
    weight: number;

}
