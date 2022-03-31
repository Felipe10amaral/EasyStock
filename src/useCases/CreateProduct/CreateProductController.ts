import { CreateProductUseCase } from "./CreateProductUseCase";
import { Request, Response} from 'express';

class CreateProductController {

    constructor( private createUseCase: CreateProductUseCase){}

    handle(request: Request, response: Response): Response{
        const {model, quantity} = request.body;
        this.createUseCase.execute({model, quantity});
        return response.status(201).send();
    }
}

export {CreateProductController}