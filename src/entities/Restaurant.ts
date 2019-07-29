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
import { Field, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Restaurant extends Base {
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ description: '음식점 이름' })
    @Column('varchar', { nullable: false, comment: '음식점 이름' })
    name!: string;
    @Column('varchar', { nullable: false, comment: '음식점 주소' })
    @Field({ description: '음식점 번호' })
    address!: string;
    @Column('varchar', { nullable: false, comment: '음식점 가게번호' })
    @Field({ description: '음식점 주소' })
    phone!: string;

    @ManyToMany(type => Keyword)
    @JoinTable({ name: 'restaurantAndKeyword' })
    @Field(type => [Keyword], { description: '가게 키워드' })
    keywords!: Array<Keyword>;

    @ManyToMany(type => Tag)
    @JoinTable({ name: 'restaurantAndTag' })
    tags!: Array<Tag>;

    @OneToMany(type => Image, image => image.restaurant)
    images!: Array<Image>;
    @OneToMany(type => Comment, comment => comment.restaurant)
    comments!: Array<Comment>;
}
