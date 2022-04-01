import {Request, Response} from 'express';
import { CreateRepairPartUseCase } from './createRepairPartService';

class CreateControllerRepairPart {

    constructor( private createRepairPartUseCase: CreateRepairPartUseCase){}
    handle(request: Request, response: Response): Response{
        const {model, quantity} = request.body;

        this.createRepairPartUseCase.execute({model, quantity});

        return response.status(201).send();

    }
}

export {CreateControllerRepairPart};