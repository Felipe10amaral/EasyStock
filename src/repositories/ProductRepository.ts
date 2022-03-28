import { Product } from "../models/Product";

interface IProduct{
    model: string;
    quantity: number;
    created_at?: Date;
}

class ProductRepository{

    private product :Product[];

    constructor(){
        this.product = [];
    }

    create({model, quantity}: IProduct){

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