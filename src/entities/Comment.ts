// import { Base } from './Base';
// import { PrimaryGeneratedColumn, ManyToOne, Column, Entity } from 'typeorm';
// import { Restaurant } from './Restaurant';

// @Entity()
// export class Comment extends Base {
//     @PrimaryGeneratedColumn()
//     id!: number;

//     @Column('varchar', { comment: '댓글 내용', nullable: false })
//     content!: string;

//     @ManyToOne(type => Restaurant, res => res.comments)
//     restaurant!: Restaurant;
// }
