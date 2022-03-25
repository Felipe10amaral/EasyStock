import {Product} from '../models/Product';

interface IProductDTO{
    model: string;
    quantity: number;
}

class ProductRepository {

    private product :Product[];

    constructor() {
        this.product = [];
    }

    create({model, quantity}: IProductDTO): void{

        const addProduct = new Product();
        
        Object.assign(addProduct, {
            model, 
            quantity,
            created_at: new Date()
        })

        this.product.push(addProduct);
        console.log(this.product)

    }

}

export {ProductRepository}