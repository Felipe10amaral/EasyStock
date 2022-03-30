import { Router } from "express";
import { ProductRepository } from "../repositories/ProductRepository";
import { createProductController } from "../useCases/CreateProduct/index";


const Routes = Router();

const productRepository = new ProductRepository();


Routes.post("/register", (request, response) => {
  return createProductController.handle(request, response);

})

Routes.get("/list", (request, response) => {
    const all = productRepository.list();

    return response.status(200).json(all);
})


export {Routes}