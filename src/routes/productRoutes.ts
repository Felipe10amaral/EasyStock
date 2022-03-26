import { Router } from "express";
import { ProductRepository } from "../repositories/ProductRepository";

const Routes = Router();

const productRepository = new ProductRepository();

Routes.post("/register", (request, response) => {
  const {model, quantity} = request.body;

  const verifyModel = productRepository.findByModel(model);
  
  if(verifyModel){
      return response.status(400).json({"error": "Model Exists"});
  }

  productRepository.create({ model, quantity})

  return response.status(201).send();

})

Routes.get("/list", (request, response) => {
    return response.status(200).json(productRepository.list());
})




export {Routes}