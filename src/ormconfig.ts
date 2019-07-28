import { ConnectionOptions } from 'typeorm';
import { User } from './entities/User';
import { Restaurant } from './entities/Restaurant';
import { Keyword } from './entities/Keyword';
import { Tag } from './entities/Tag';
import { Image } from './entities/Image';
import { Comment } from './entities/Comment';

export const ormConfig: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    entities: [User, Restaurant, Keyword, Tag, Image, Comment],
    synchronize: true,
    logging: 'all',
    database: 'good2meal_dev',
};
