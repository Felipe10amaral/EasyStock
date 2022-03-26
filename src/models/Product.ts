import {v4} from 'uuid';

class Product{
    id: string;
    model: string;
    quantity: number;

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }

}

export {Product}