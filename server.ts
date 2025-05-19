import * as Hapi from 'hapi';
import { routes } from './src/routes.js';

const port = 4000;
const host = '0.0.0.0';
const server = new Hapi.Server({
    port: port,
    host: host
});

server.route(routes);

export default server;