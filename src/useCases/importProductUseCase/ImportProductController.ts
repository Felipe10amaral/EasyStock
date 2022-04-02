import { Request, Response } from "express";
import { ImportProductUseCase } from "./ImportProductUseCase";

class ImportProductController {

    constructor( private importProductUseCase: ImportProductUseCase){}

    handle(request: Request, response: Response): Response{
        const {file} = request;
        this.importProductUseCase.execute(file);
        return response.status(200).send();
    }
}

export {ImportProductController}