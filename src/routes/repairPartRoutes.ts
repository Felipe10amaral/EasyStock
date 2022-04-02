import { Router } from 'express';
import { createControllerRepairPart } from '../useCases/CreateRepairPart';
import { listRepairPartController } from '../useCases/listRepairPart';

const RepairPartRoutes = Router();


RepairPartRoutes.post("/", (request, response) => {
    return createControllerRepairPart.handle(request, response);
});

RepairPartRoutes.get("/", (request, response) => {
    return listRepairPartController.handle(request, response);
    
})

export { RepairPartRoutes};