import express from 'express';
import bodyParser from 'body-parser';
import {cart} from '../model/index.js';

const cartRouter = express.Router()
cartRouter.get('/', (req, res)=>{
    try{
        cart.fetchAllOrders(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve cart'
        })
    }
})
cartRouter.get('/:id', (req, res)=>{
    try{
        cart.fetchUserOrder(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve your orders'
        })
    }
})

cartRouter.post('/add', bodyParser.json(),(req,res)=>{
    try{
        cart.addToCart(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add to your cart'
        })
    }
})

// cartRouter.delete('/delete/:id', bodyParser.json(), (req, res)=>{
//     try{
//         cart.deleteUser(req, res)
//     }catch(e){
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed to delete a user'
//         })
//     }
// })

export{
    cartRouter,
    express
}









