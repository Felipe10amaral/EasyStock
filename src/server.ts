import express from 'express';
import { Routes } from './routes/productRoutes';
import { RepairPartRoutes } from './routes/repairPartRoutes';

const app = express();

app.use(express.json())

app.use(Routes, RepairPartRoutes);


app.listen(3333);

