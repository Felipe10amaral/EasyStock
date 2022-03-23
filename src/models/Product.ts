import {v4} from 'uuid';

class Product {
    id?: string;
    model: string;
    quantity: number;
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = v4()
        }
    }
}

export {Product}