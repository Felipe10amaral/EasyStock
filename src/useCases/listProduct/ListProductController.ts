import { ListProductUseCase } from "./ListProductUseCase";
import {Request, Response} from 'express';

class ListProductController{
    
    constructor(private productUseCase: ListProductUseCase){}

    handle(request: Request, response: Response): Response{

        const all = this.productUseCase.execute();
        
        return response.json(all);
    }
}

export {ListProductController};