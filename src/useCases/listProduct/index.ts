import { ProductRepository } from "../../repositories/ProductRepository";
import { ListProductController } from "./ListProductController";
import { ListProductUseCase } from "./ListProductUseCase";


const listRepository = new ProductRepository();
const listUseCase = new ListProductUseCase(listRepository);
const listController = new ListProductController(listUseCase);

export {listController};