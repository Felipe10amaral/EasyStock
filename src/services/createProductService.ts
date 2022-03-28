import { IProductRepository } from "../repositories/IProductRepository";

interface IRequest {
    model: string;
    quantity: number;
}

class CreateProductService{

    constructor(private createProductRepository :IProductRepository){}

    execute({model, quantity}: IRequest){

        const verifyModel = this.createProductRepository.findByModel(model);

        if(verifyModel){
            throw new Error("Already Model Exists");
        }

        this.createProductRepository.create({model, quantity});
    }
}

export {CreateProductService}