import { ProductRepository } from "../../repositories/implementations/ProductRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const createProductRepository = ProductRepository.getInstance();
const createProductUseCase = new CreateProductUseCase(createProductRepository);
const createProductController = new CreateProductController(createProductUseCase);

export {createProductController};