import { Router } from "express";
import {v4 } from 'uuid';
import { Product } from "../models/Product";

const Routes = Router();

const product :Product[]= [];

Routes.post("/register", (request, response) => {
    const {model, quantity} = request.body;

    const addProduct = new Product();

    Object.assign(addProduct, {
        model,
        quantity,
        createt_at: new Date()
    })

    product.push(addProduct)

    console.log(product);
    return response.status(201).send();

})




export {Routes}