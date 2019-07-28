import { buildSchema } from 'type-graphql';
import { UserResolver } from '../resolvers/User.resolver';

export const createSchema = async () =>
    await buildSchema({
        resolvers: [UserResolver],
    });
