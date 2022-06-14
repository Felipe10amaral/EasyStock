import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";


class ListProductUseCase {

    constructor( private productRepository :IProductRepository ){}

    execute(): Product[]{
        const AllProduct = this.productRepository.list();
        return AllProduct;
    }    
}

export {ListProductUseCase};