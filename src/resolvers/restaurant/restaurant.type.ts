import { InputType, Field, createUnionType, ObjectType } from 'type-graphql';
import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Restaurant } from '../../models/Restaurant';

@InputType()
class RestaurantKeyword {
    @IsString()
    @Field()
    id!: number;
    @IsString()
    @Field()
    name!: string;
}

@InputType()
export class UpdateRestaurant {
    @Field()
    @IsString()
    name!: string;
    @Field()
    @IsString()
    phone!: string;
    @Field()
    @IsString()
    address!: string;

    @IsArray()
    @ValidateNested()
    @Type(type => RestaurantKeyword)
    kewords!: Array<RestaurantKeyword>;
}
@InputType()
export class DeleteRestaurant {
    @Field()
    id!: number;
}

@ObjectType()
export class Key {
    @Field()
    id!: string;
    @Field()
    location!: string;
}

@ObjectType()
export class Pagination {
    @Field(type => Key)
    lastEvaluatedKey!: Key;
}

export const SearchResultUnion = createUnionType({
    name: 'SearchResult', // the name of the GraphQL union
    types: [Restaurant], // array of object types classes
});
