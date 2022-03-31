import { Product } from "../models/Product";
import { IProductDTO, IProductRepository } from "./IProductRepository";

    
class ProductRepository implements IProductRepository {
    private product : Product[];

    constructor(){
        this.product = [];
    }

    create({ model, quantity }: IProductDTO): void {
        const addProduct = new Product();

        Object.assign(addProduct, {
            model,
            quantity,
            created_at: new Date()
        })

        console.log(addProduct);

        this.product.push(addProduct);
    }
    findByModel(model: string): Product {
        const verifyModelExists = this.product.find( product => product.model === model);
        return verifyModelExists;
    }
    list(): Product[] {
        const all = this.product;
        return all;
    }
}

export {ProductRepository};