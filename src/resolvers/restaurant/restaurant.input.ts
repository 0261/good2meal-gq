import { InputType, Field } from 'type-graphql';
import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

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
