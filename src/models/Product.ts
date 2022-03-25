import {v4} from 'uuid';

class Product {
    id?: string;
    name: string;
    model: string;

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }

}

export {Product}