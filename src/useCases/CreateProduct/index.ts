import { ProductRepository } from "../../repositories/implementations/ProductRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

export default (): CreateProductController => {
    const createProductRepository = new ProductRepository();
    const createProductUseCase = new CreateProductUseCase(createProductRepository);
    const createProductController = new CreateProductController(createProductUseCase);


    return createProductController;
}
