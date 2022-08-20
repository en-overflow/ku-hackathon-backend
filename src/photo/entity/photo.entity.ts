import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
}