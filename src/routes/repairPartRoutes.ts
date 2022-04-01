import { Router } from 'express';
import { createControllerRepairPart } from '../useCases/CreateRepairPart';
import { listRepairPartController } from '../useCases/listRepairPart';

const RepairPartRoutes = Router();


RepairPartRoutes.post("/repair-part", (request, response) => {
    return createControllerRepairPart.handle(request, response);
});

RepairPartRoutes.get("/repair-part", (request, response) => {
    return listRepairPartController.handle(request, response);
    
})

export { RepairPartRoutes};