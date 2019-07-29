import { buildSchema } from 'type-graphql';
import { UserResolver } from '../resolvers/User.resolver';
import { Container } from 'typedi';
export const createSchema = async () =>
    await buildSchema({
        resolvers: [UserResolver],
        container: Container,
    });
