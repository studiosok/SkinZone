import express from 'express';
import path from 'path';

// Route Handlers
import { index } from './src/controllers/home.js';
import { search } from './src/controllers/search.js';

const __dirname = import.meta.dirname;

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.json());

// Static Files
app.use(
    express.static(path.join(__dirname, '/public'))
);

// Routes
app.get('/', index);
app.post('/search', search);

export default app;