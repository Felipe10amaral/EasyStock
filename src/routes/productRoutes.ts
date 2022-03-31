import { Router } from "express";
import { listController } from "../useCases/listProduct";
import { createProductController } from "../useCases/CreateProduct/index";


const Routes = Router();


Routes.post("/register", (request, response) => {
  return createProductController.handle(request, response);

})

Routes.get("/list", (request, response) => {
  return listController.handle(request, response);
})


export {Routes}