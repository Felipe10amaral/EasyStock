import { Router } from 'express';
import { productRoutes } from './productRoutes';
import { RepairPartRoutes } from './repairPartRoutes';

const router = Router();

router.use("/product", productRoutes);
router.use("/repairPart", RepairPartRoutes);

export {router};