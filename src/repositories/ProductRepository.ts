import { Product } from "../models/Product";
import {IProductDTO, IProductRepository} from './IProductRepository';

class ProductRepository implements IProductRepository{

    private product :Product[];

    constructor(){
        this.product = [];
    }

    create({model, quantity}: IProductDTO){

        const addProduct = new Product();

        Object.assign(addProduct,  {
            model,
            quantity,
            create_at: new Date()
        })

        console.log(addProduct);

        this.product.push(addProduct);
    }

    list(): Product[]{
        return this.product;
    }

    findByModel(model: string) :Product{
        const verifyModel = this.product.find((product) => product.model === model);
        return verifyModel;
    }
}

export {ProductRepository}