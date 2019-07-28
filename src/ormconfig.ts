import { ConnectionOptions } from 'typeorm';
import { User } from './entities/User';

export const ormConfig: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    entities: [User],
    synchronize: !true,
    logging: 'all',
    database: 'good2meal_dev',
};
