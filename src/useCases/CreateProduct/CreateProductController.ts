import { CreateProductUseCase } from "./CreateProductUseCase";
import { Request, Response} from 'express';

class CreateProductController {

    constructor( private createUseCase: CreateProductUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {model, quantity} = request.body;
        await this.createUseCase.execute({model, quantity});
        return response.status(201).send();
    }
}

export {CreateProductController}