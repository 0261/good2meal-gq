import { Base } from './Base';
import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    OneToMany,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Keyword } from './Keyword';
import { Image } from './Image';
import { Tag } from './Tag';
import { Comment } from './Comment';

@Entity()
export class Restaurant extends Base {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { nullable: false, comment: '음식점 이름' })
    name!: string;
    @Column('varchar', { nullable: false, comment: '음식점 주소' })
    address!: string;
    @Column('varchar', { nullable: false, comment: '음식점 가게번호' })
    phone!: string;

    @ManyToMany(type => Keyword)
    @JoinTable({ name: 'restaurantAndKeyword' })
    keywords!: Array<Keyword>;

    @ManyToMany(type => Tag)
    @JoinTable({ name: 'restaurantAndTag' })
    tags!: Array<Tag>;

    @OneToMany(type => Image, image => image.restaurant)
    images!: Array<Image>;
    @OneToMany(type => Comment, comment => comment.restaurant)
    comments!: Array<Comment>;
}
