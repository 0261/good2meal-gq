import { Base } from './Base';
import { PrimaryGeneratedColumn, ManyToOne, Column, Entity } from 'typeorm';

@Entity()
export class Keyword extends Base {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { comment: '키워드 명', nullable: false })
    name!: string;
}
