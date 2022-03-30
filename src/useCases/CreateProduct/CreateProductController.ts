import { CreateProductUseCase } from "./CreateProductUseCase";
import {Request, Response} from 'express';


class CreateProductController{

    constructor( private createProduct : CreateProductUseCase){}

    handle(request: Request, response: Response): Response{
        const {model, quantity} = request.body;

        this.createProduct.execute({model, quantity});

        return response.status(201).send();
    }
}

export{ CreateProductController}