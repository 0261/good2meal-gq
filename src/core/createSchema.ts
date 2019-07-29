import { buildSchema } from 'type-graphql';
import { RestaurantResolver } from '../resolvers/restaurant/Restaurant.resolver';

export const createSchema = async () =>
    await buildSchema({
        resolvers: [RestaurantResolver],
    });
