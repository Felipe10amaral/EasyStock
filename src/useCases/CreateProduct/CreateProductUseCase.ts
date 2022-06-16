import { IProductRepository } from "../../repositories/IProductRepository";

interface IRequest{
    model: string;
    quantity: number;
}

class CreateProductUseCase {

    constructor(private createRepository : IProductRepository){}

    async execute({model, quantity}: IRequest): Promise<void>{

        const verifyModel = await this.createRepository.findByModel(model);

        if(verifyModel){
            throw new Error(" Already Exists Model");
        }

        this.createRepository.create({model, quantity});
    }
}

export {CreateProductUseCase};