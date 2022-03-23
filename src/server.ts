import express from 'express';
import { Routes } from './routes/productRoutes';

const app = express();

app.use(express.json())

app.use(Routes);


app.listen(3333);

