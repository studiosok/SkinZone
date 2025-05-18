import * as Hapi from 'hapi';
import { dataRoutes } from './src/data/dataRoutes.js';

const port = 4000;
const host = '0.0.0.0';
const server = new Hapi.Server({
    port: port,
    host: host
});

server.route(dataRoutes);

export default server;