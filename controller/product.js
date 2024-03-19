import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../model/index.js';

const productRouter = express.Router()
productRouter.get('/', (req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e){
        res.join({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
productRouter.get('/:id', (req, res)=>{
    try{
        products.fetchProduct(req, res)
    }catch(e){
    res.join({
            status: res.statusCode,
            msg: 'Failed to retrieve product'
        })
    }
})
productRouter.post('/addProduct', bodyParser.json(), (req, res)=>{
    try{
        products.addProduct(req, res)
    }catch(e){
        res.join({
            status: res.statusCode,
            msg: 'Failed to add product'
        })
    }
})
productRouter.patch('/updateProduct/:id', bodyParser.json(), (req, res)=>{
    try{
        products.updateProduct(req, res)
    }catch(e){
        res.join({
            status: res.statusCode,
            msg: 'Failed to update product'
        })
    }
})
productRouter.delete('/deleteProduct/:id', bodyParser.json(), (req, res)=>{
    try{
        products.deleteProduct(req, res)
    }catch(e){
        res.join({
            status: res.statusCode,
            msg: 'Successfully deleted'
        })
    }
})
export{
    productRouter
}
