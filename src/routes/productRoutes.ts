import { Router } from "express";
import multer from 'multer';

import { listController } from "../useCases/listProduct";
import { createProductController } from "../useCases/CreateProduct/index";
import { importProductController } from "../useCases/importProductUseCase";

const productRoutes = Router();

const upload = multer({
  dest: "./tmp"
});


productRoutes.post("/", (request, response) => {
  return createProductController.handle(request, response);
})

productRoutes.get("/", (request, response) => {
  return listController.handle(request, response);
})

productRoutes.post("/import", upload.single("file") ,(request, response) => {
  return importProductController.handle(request, response);
})


export {productRoutes}