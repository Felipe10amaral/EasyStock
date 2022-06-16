import {Product} from '../entities/Product';

interface IProductDTO {
    model: string;
    quantity: string;
}

interface IProductRepository{
    create({model, quantity}: IProductDTO): Promise<void>;
    findByModel(model: string): Promise<Product>;
    list(): Promise<Product[]>;
}

export {IProductDTO, IProductRepository};