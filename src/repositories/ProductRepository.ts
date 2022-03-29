import { Product } from "../models/Product";
import { IProductRepository, IProductDTO } from "./IProductRepository";


class ProductRepository implements IProductRepository{

    private product :Product[];

    constructor(){
        this.product = [];
    }

    create({model, quantity,}: IProductDTO): void{

        const addProduct = new Product();
        Object.assign(addProduct, {
            model,
            quantity,
            created_at: new Date()
        })

        console.log(addProduct);

        this.product.push(addProduct)
    }

    list(): Product[]{
        const listAll = this.product;
        return listAll;
    }

    findByModel(model: string): Product{
        const verifyModelExists = this.product.find((product) => product.model === model);
        return verifyModelExists;
    }
}

export {ProductRepository}