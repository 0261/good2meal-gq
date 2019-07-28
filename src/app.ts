import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createSchema } from './core/createSchema';

class Application {
    private readonly app: Express.Application = Express();
    async start() {
        const server = new ApolloServer({
            schema: await createSchema(),
        });
        server.applyMiddleware({ app: this.app });

        this.app.listen(4000, () =>
            console.log('http://localhost:4000/graphql'),
        );
    }
}

export namespace ApplicationFactory {
    export const create = (options?: any): Application => {
        return new Application();
    };
}
