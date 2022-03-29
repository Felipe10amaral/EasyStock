import { Router } from 'express';
import { RepairPartRepository } from '../repositories/RepairPartRepository';
import { CreateRepairPartService } from '../services/createRepairPartService';

const RepairPartRoutes = Router();

const repositoryPartRepair = new RepairPartRepository();

RepairPartRoutes.post("/repair-part", (request, response) => {
    const {model, quantity} = request.body;

    const createServiceRepairPart = new CreateRepairPartService(repositoryPartRepair);

    createServiceRepairPart.execute({model, quantity});

    return response.status(201).send();

});

RepairPartRoutes.get("/repair-part", (request, response) => {
    const all = repositoryPartRepair.list();
    return response.json(all);
})

export { RepairPartRoutes};