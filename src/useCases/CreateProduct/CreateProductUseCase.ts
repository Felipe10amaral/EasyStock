import { IProductRepository } from "../../repositories/IProductRepository";

interface IRequest {
    model: string;
    quantity: number;
}

class CreateProductUseCase{
    constructor( private createRepository : IProductRepository){}

    execute({model, quantity}: IRequest){

        const verifyModelExists = this.createRepository.findByModel(model);
        if(verifyModelExists){
            throw new Error("Already Model Exists");
        }

        this.createRepository.create({model, quantity});
    }
}

export {CreateProductUseCase};