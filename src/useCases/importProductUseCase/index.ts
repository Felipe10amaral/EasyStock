import { ImportProductController } from "./ImportProductController";
import { ImportProductUseCase } from "./ImportProductUseCase";
import { ProductRepository } from '../../repositories/implementations/ProductRepository';

const productRepository = null;
const importProductUseCase = new ImportProductUseCase(productRepository);
const importProductController = new ImportProductController(importProductUseCase);

export {importProductController};