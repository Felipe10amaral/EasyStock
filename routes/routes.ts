import { Router } from "express";

const Routes = Router();

const product = [];

Routes.post("/register", (request, response) => {
    const {model, quantity} = request.body;

    product.push({
        model,
        quantity
    });

    console.log(product);
    return response.status(201).send();

})




export {Routes}