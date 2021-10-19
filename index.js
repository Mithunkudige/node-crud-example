import express from 'express';
import bookRoutes from './routes/books.js';

const app = express();

app.use(express.json());

app.use('/', bookRoutes);

app.listen(3000, () => console.log('Listening at post 3000...'));
