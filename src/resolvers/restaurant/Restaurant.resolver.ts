import { Resolver, Query, Arg, Args } from 'type-graphql';
import { GetAllRestaurant } from './Restaurant.input';
import { getManager } from 'typeorm';
import { Restaurant } from '../../entities/Restaurant';

@Resolver()
export class RestaurantResolver {
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
}
