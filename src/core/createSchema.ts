import { buildSchema } from 'type-graphql';
import path from 'path';

const resolversPath = path.resolve(__dirname, '..', 'resolvers');

export const createSchema = async () =>
    await buildSchema({
        resolvers: [`${resolversPath}/**/*.ts`],
    });
