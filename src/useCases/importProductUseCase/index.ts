import { ImportProductController } from "./ImportProductController";
import { ImportProductUseCase } from "./ImportProductUseCase";


const importProductUseCase = new ImportProductUseCase();
const importProductController = new ImportProductController(importProductUseCase);

export {importProductController};