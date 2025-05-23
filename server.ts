import app from './app.js';

const server = app.listen(app.get('port'), () => {
    const port = app.get('port');
    const environment = app.get('env');
    console.log(`App is running at ${port}, in ${environment} env.`);
});

export default server;