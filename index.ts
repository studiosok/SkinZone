import server from './server.js';

export class Main {
    start() {
        console.log('Starting server...');
        server.start();
        console.log(`Server up and running at ${server.info.uri}`);
    }
    stop() {
        console.log('Stopping server...');
        server.stop();
    }
}