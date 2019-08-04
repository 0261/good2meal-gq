// import { Base } from './Base';
// import { PrimaryGeneratedColumn, ManyToOne, Column, Entity } from 'typeorm';
// import { Restaurant } from './Restaurant';

// @Entity()
// export class Image extends Base {
//     @PrimaryGeneratedColumn()
//     id!: number;

//     @Column('varchar', { comment: '이미지파일명', nullable: false })
//     name!: string;
//     @Column('varchar', { comment: '이미지 url', nullable: false })
//     url!: string;
//     @ManyToOne(type => Restaurant, res => res.images)
//     restaurant!: Restaurant;
// }
