import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';

import { getManager } from 'typeorm';
import { Restaurant } from '../../entities/Restaurant';
import { UpdateRestaurant, DeleteRestaurant } from './restaurant.input';
import { DynamoDB } from '../../services/dynamodb';

@Resolver()
export class RestaurantResolver {
    constructor(private readonly dynamodb: DynamoDB) {}
    @Query(returns => [Restaurant], { description: '전체 음식점' })
    async getAllRestaurant(): Promise<Array<Restaurant>> {
        try {
            const restaurants = await getManager()
                .getRepository<Restaurant>('restaurant')
                .find();
            return restaurants;
        } catch (error) {
            throw new Error(error);
        }
    }

    @Query(returns => Restaurant, { description: '단일 음식점' })
    async getRestaurant(
        @Arg('id', { description: '조회 할 음식점 아이디' }) id: number,
    ): Promise<Restaurant> {
        try {
            const restaurant = await getManager()
                .getRepository<Restaurant>('restaurant')
                .findOneOrFail({ id });
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
