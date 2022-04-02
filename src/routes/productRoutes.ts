import { Router } from "express";
import { listController } from "../useCases/listProduct";
import { createProductController } from "../useCases/CreateProduct/index";


const productRoutes = Router();


productRoutes.post("/", (request, response) => {
  return createProductController.handle(request, response);

})

productRoutes.get("/", (request, response) => {
  return listController.handle(request, response);
})


export {productRoutes}