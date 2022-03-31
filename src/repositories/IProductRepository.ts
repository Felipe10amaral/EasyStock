import {Product} from '../models/Product';

interface IProductDTO {
    model: string;
    quantity: number;
}

interface IProductRepository{
    create({model, quantity}: IProductDTO): void;
    findByModel(model: string): Product;
    list(): Product[];
}

export {IProductDTO, IProductRepository};