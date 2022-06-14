import { ProductRepository } from "../../repositories/implementations/ProductRepository";
import { ListProductController } from "./ListProductController";
import { ListProductUseCase } from "./ListProductUseCase";


const listRepository = null;
const listUseCase = new ListProductUseCase(listRepository);
const listController = new ListProductController(listUseCase);


export {listController};