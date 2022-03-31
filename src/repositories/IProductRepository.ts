import { Product } from "../models/Product";

interface IProductDTO{
    model: string;
    quantity: number;
    created_at?: Date;
} 

interface IProductRepository{
    create({model, quantity}: IProductDTO): void;
    list(): Product[];
    findByModel(model: string): Product;
}

export {IProductDTO, IProductRepository}