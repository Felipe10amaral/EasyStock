import fs from 'fs';
import { parse } from 'csv-parse';
import { IProductRepository } from '../../repositories/IProductRepository';

interface IImportProduct{
    model: string;
    quantity: number;
}

class ImportProductUseCase{
    constructor( private productRepository: IProductRepository){}

    loadProduct(file: Express.Multer.File): Promise<IImportProduct[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const addProduct: IImportProduct[] = [];

            const parseFile = parse();
            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [model, quantity] = line;

                addProduct.push({
                    model,
                    quantity
                })
            })
            .on("end", () => {
                resolve(addProduct);
            })
            .on("error", (err) => {
                reject(err);
            })
        })
    }

    async execute(file: Express.Multer.File){
        const fileProduct = await this.loadProduct(file);
        
        fileProduct.map( async (product) => {
            const {model, quantity} = product;

            const ExistsModel = this.productRepository.findByModel(model);
             if(!ExistsModel){
                 this.productRepository.create({
                     model,
                     quantity
                 })
             }
        })
    }
}
    
export{ ImportProductUseCase }