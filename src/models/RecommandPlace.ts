import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class RecommandPlace {
    @Field()
    address!: string;
    @Field()
    description!: string;
    @Field()
    id!: string;
    @Field()
    index!: string;
    @Field()
    name!: string;
    @Field({ nullable: true })
    roadAddress!: string;
    @Field({ nullable: true })
    tel!: string;
    @Field()
    thumUrl!: string;
    @Field()
    x!: string;
    @Field()
    y!: string;

    @Field(type => [String])
    category!: Array<string>;
    @Field(type => [String])
    context!: Array<string>;

    // microReview!: Array<any>;
    @Field()
    reviewCount!: number;
}
