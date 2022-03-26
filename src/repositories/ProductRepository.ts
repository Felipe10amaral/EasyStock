import { response } from "express";
import { Product } from "../models/Product";

interface IProduct {
    model: string;
    quantity: number;
    created_at?: Date;
}

class ProductRepository {
    private product :Product[];

    constructor(){
        this.product = [];
    }

    create( {model, quantity}: IProduct): void{

        const addProduct = new Product();

        Object.assign(addProduct, {
            model,
            quantity,
            created_at: new Date()
        })

        this.product.push(addProduct);
        console.log(this.product);

    }

    list(): Product[]{
        return this.product;

    }

   findByModel(model: string): Product{
       const verifyExists = this.product.find((product) => product.model === model);
       return verifyExists;
   }

}

export {ProductRepository}