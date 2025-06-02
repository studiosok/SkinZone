import express from 'express';
import { index } from '../src/controllers/home';
import { search } from '../src/controllers/search';

const app = express();

app.get('/', index);
// app.post('/search', search);

export default app;