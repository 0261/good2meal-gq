import Express from 'express';
import { RequestHandlerParams } from 'express-serve-static-core';

import { ApolloServer } from 'apollo-server-express';
import { createSchema } from './core/createSchema';
import { Container } from 'typedi';
import { Database } from './services/database';
import { ormConfig } from './ormconfig';

class Application {
    private readonly database: Database = Container.get(Database);
    private readonly app: Express.Application = Express();
    constructor() {
        console.log('start');
    }
    async start(): Promise<void> {
        try {
            await this.database.createConnection(ormConfig);
            const server = new ApolloServer({
                schema: await createSchema(),
            });
            server.applyMiddleware({ app: this.app });
            this.app.listen(4000, () =>
                console.log('http://localhost:4000/graphql'),
            );
        } catch (error) {
            throw new Error('database connect fail');
        }
    }
    use(...handlers: Array<RequestHandlerParams>): void {
        this.app.use(...handlers);
    }
}

export namespace ApplicationFactory {
    export const create = (options?: any): Application => {
        return new Application();
    };
}
