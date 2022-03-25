import { Router } from "express";
import { ProductRepository } from "../repositories/ProductRepository";

const Routes = Router();

const productRepository = new ProductRepository();

Routes.post("/register", (request, response) => {
    const {model, quantity} = request.body;

    productRepository.create({model, quantity});
    
    return response.status(201).send();

})




export {Routes}