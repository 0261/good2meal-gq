import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createSchema } from './core/createSchema';
import { createConnection } from 'typeorm';
import { ormConfig } from './ormconfig';

class Application {
    private readonly app: Express.Application = Express();
    constructor() {
        this.app.use([
            morgan('dev'),
            helmet(),
            cors(),
            bodyParser.urlencoded({ extended: false }),
            bodyParser.json(),
        ]);
        console.log('start');
    }
    async start() {
        try {
            await createConnection(ormConfig);
            const server = new ApolloServer({
                schema: await createSchema(),
            });
            server.applyMiddleware({ app: this.app });
            this.app.listen(4000, () =>
                console.log('http://localhost:4000/graphql'),
            );
        } catch (error) {
            console.log(error.message);
            throw new Error('database connect fail');
        }
    }
}

export namespace ApplicationFactory {
    export const create = (options?: any): Application => {
        return new Application();
    };
}
