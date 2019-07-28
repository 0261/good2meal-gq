import { Base } from './Base';
import { PrimaryGeneratedColumn, ManyToOne, Column, Entity } from 'typeorm';

@Entity()
export class Tag extends Base {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { comment: '태그 명', nullable: false })
    name!: string;
}
