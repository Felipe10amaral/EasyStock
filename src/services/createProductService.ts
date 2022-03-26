import { ProductRepository } from "../repositories/ProductRepository";

interface IRequest {
    model: string;
    quantity: number;
}

class CreateProductService{

    constructor( private productRepositoryService: ProductRepository){}

    execute({model, quantity}: IRequest){

        const verifyModel = this.productRepositoryService.findByModel(model);

        if(verifyModel){
            throw new Error( "Already Exists")
        }

        this.productRepositoryService.create({ model, quantity});
    }   
}

export {CreateProductService}