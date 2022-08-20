import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
}