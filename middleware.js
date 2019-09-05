import bodyParser from 'body-parser';
import express from 'express';
import health from './modules/health.route';
import goce from './modules/goce.route';
import sentinel from './modules/sentinel.route';

const middleware = express();

middleware.use(bodyParser.json({}));
middleware.use(bodyParser.urlencoded({ extended: true }));
middleware.use(health);
middleware.use(sentinel);

export default middleware;