import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Category {
    @Field()
    id!: string;
    @Field()
    location!: string;
    @Field(type => [String])
    recommandation!: Array<string>;
}
