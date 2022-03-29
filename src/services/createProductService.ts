import { IProductRepository } from "../repositories/IProductRepository";

interface IRequest {
    model: string;
    quantity: number;
}

class CreateProductService{

    constructor (private createRepository :IProductRepository){}

    execute({model, quantity}: IRequest){
        const verifyModel = this.createRepository.findByModel(model);

        if(verifyModel){
            throw new Error("Already Model Exists");
        }

        this.createRepository.create({model, quantity});
        
    }
}

export{CreateProductService};