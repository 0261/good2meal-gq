import { buildSchema } from 'type-graphql';
import { RestaurantResolver } from '../resolvers/restaurant/restaurant.resolver';
import { Container } from 'typedi';

export const createSchema = async () =>
    await buildSchema({
        resolvers: [RestaurantResolver],
        container: Container,
    });
