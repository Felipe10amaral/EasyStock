import { Product } from "../models/Product";

interface IProductDTO{
    model: string;
    quantity: number;
    created_at?: Date;
}

interface IProductRepository{

    create({model: string, quantity :number}: IProductDTO):void;
    findByModel( model :string):Product;
    list():Product[];  

}

export {IProductRepository, IProductDTO}