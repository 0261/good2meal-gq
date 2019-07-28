import 'reflect-metadata';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApplicationFactory } from './src/app';

const app = ApplicationFactory.create();
app.use([
    morgan('dev'),
    helmet(),
    cors(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
]);
app.start();
