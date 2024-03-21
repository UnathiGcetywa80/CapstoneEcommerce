import {Users} from '../model/users.js';
import {Products} from '../model/products.js';
import { Cart } from './Cart.js';
let users = new Users()
let products = new Products()
let cart = new Cart()
export{
    users,
    products,
    cart
}
