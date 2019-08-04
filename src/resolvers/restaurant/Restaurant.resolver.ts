import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import {
    Expression,
    equal,
    UpdateExpression,
} from '@typemon/dynamodb-expression';
import { UpdateRestaurant, DeleteRestaurant } from './restaurant.input';
import { DynamoDB } from '../../services/dynamodb';
import { Restaurant } from '../../models/Restaurant';

@Resolver()
export class RestaurantResolver {
    constructor(private readonly dynamodb: DynamoDB) {}
    @Query(returns => [Restaurant], { description: '전체 음식점' })
    async getAllRestaurant(): Promise<Array<Restaurant>> {
        try {
            const query: Expression = equal('location', '구로디지털단지');
            const restaurants = (await this.dynamodb.query(
                'good2meal',
                query,
            )) as Array<Restaurant>;
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
            const getQuery = {
                id,
                location: '구로디지털단지',
            };
            const restaurant = await this.dynamodb.get('good2meal', getQuery);
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
