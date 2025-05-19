import server from './server.js';

export async function main() {
    console.log('Starting server...');
    await server.start();
    console.log(`Server up and running at ${server.info.uri}`);
}

main();