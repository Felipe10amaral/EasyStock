import { getRepository, Repository } from "typeorm";
import { Product } from "../../entities/Product";
import { IProductDTO, IProductRepository } from "../IProductRepository";

    
class ProductRepository implements IProductRepository {
    private repository : Repository<Product>;

    private static INSTANCE :ProductRepository;

    private constructor(){
        this.repository = getRepository(Product);
    }

    public static getInstance(): ProductRepository{
        if(!ProductRepository.INSTANCE){
            ProductRepository.INSTANCE = new ProductRepository();
        }

        return ProductRepository.INSTANCE;
    }

    async create({ model, quantity }: IProductDTO): Promise<void> {
        const product = this.repository.create({
            model,
            quantity
        });

        await this.repository.save(product);
       
    }
    async findByModel(model: string): Promise<Product> {
        const verifyModelExists = await this.repository.findOne({model});
        return verifyModelExists;
    }
    async list(): Promise<Product[]> {
        const all = await this.repository.find();
        return all;
    }
}

export {ProductRepository};