import {v4} from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("product")
class Product{

    @PrimaryColumn()
    id: string;

    @Column()
    model: string;
    
    @Column()
    quantity: string;

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }
}

export {Product}