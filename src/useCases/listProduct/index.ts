import { ProductRepository } from "../../repositories/ProductRepository";
import { ListProductController } from "./ListProductController";
import { ListProductUseCase } from "./ListProductUseCase";


const listRepository = ProductRepository.getInstance();
const listUseCase = new ListProductUseCase(listRepository);
const listController = new ListProductController(listUseCase);

export {listController};