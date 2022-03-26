import { Router } from "express";
import { ProductRepository } from "../repositories/ProductRepository";
import { CreateProductService } from "../services/createProductService";

const Routes = Router();

const productRepository = new ProductRepository();


Routes.post("/register", (request, response) => {
  const {model, quantity} = request.body;

  const createProductService = new CreateProductService(productRepository);

  createProductService.execute({model, quantity});

  return response.status(201).send();

})

Routes.get("/list", (request, response) => {
    return response.status(200).json(productRepository.list());
})


export {Routes}