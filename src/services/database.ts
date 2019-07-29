import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { Service } from 'typedi';

@Service()
export class Database {
    async createConnection(config: ConnectionOptions): Promise<Connection> {
        return await createConnection(config);
    }
}
