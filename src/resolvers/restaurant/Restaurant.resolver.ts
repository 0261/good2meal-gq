import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import {
    Expression,
    equal,
    UpdateExpression,
} from '@typemon/dynamodb-expression';
import { UpdateRestaurant, DeleteRestaurant, Key } from './restaurant.type';
import { DynamoDB } from '../../services/dynamodb';
import { Restaurant } from '../../models/Restaurant';

@Resolver()
export class RestaurantResolver {
    constructor(private readonly dynamodb: DynamoDB) {}
    @Query(returns => [Restaurant], { description: '전체 음식점' })
    async getAllRestaurant(
        @Arg('tag', { nullable: true }) tag: string,
        @Arg('last', { nullable: true }) last: string,
    ) {
        try {
            const ExclusiveStartKey = last
                ? { id: last, location: '구로디지털단지' }
                : undefined;

            const query = equal('location', '구로디지털단지');
            const { Items, LastEvaluatedKey } = await this.dynamodb.query(
                'good2meal',
                query,
                undefined,
                { ExclusiveStartKey },
            );
            const restaurants = Items as Array<Restaurant>;
            const lastEvaluatedKey = LastEvaluatedKey as Key;
            return restaurants;
        } catch (error) {
            throw new Error(error);
        }
    }

    @Query(returns => Restaurant, { description: '단일 음식점' })
    async getRestaurant(
        @Arg('id', { description: '조회 할 음식점 아이디' }) id: string,
    ): Promise<Restaurant> {
        try {
            const query = {
                id,
                location: '구로디지털단지',
            };
            const restaurant = await this.dynamodb.get('good2meal', query);
            return restaurant;
        } catch (error) {
            throw new Error(error);
        }
    }

    @Mutation(returns => String)
    async updateRestaurant(@Arg('input') input: UpdateRestaurant) {
        try {
            console.log(input);
            return '';
        } catch (error) {
            throw new Error(error);
        }
    }

    @Mutation(returns => String)
    async deleteRestaurant(@Arg('input') input: DeleteRestaurant) {
        try {
            console.log(input);
            return '';
        } catch (error) {
            throw new Error(error);
        }
    }
}
