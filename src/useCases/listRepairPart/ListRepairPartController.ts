import { Request, Response} from 'express';
import { ListRepairPartUseCase } from './ListRepairPartUseCase';

class ListRepairPartController {
    constructor( private listRepairPartUseCase :ListRepairPartUseCase){}

    handle(request: Request, response: Response): Response{
        const allListRepairPart = this.listRepairPartUseCase.execute();
        return response.json(allListRepairPart); 
    }
}

export {ListRepairPartController};