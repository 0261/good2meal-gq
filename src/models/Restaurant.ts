import { ObjectType, Field } from 'type-graphql';
import { Summary } from './Summary';
import { RecommandPlace } from './RecommandPlace';

@ObjectType()
export class Restaurant {
    @Field(type => Summary, { description: '요약' })
    summary!: Summary;
    @Field()
    location!: string;
    @Field()
    id!: string;

    @Field(type => [RecommandPlace])
    recommendPlace!: Array<RecommandPlace>;

    review!: any;
    datalab!: any;
}
