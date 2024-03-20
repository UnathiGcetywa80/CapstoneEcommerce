import { users } from "./users.js";
import { Products } from "./Products.js";
// create objects
let Users = new users()
let Products = new products()
export {
    users,
    products
}
import {Users} from '../model/users.js';
import {Products} from '../model/products.js';

let users = new Users()
let products = new Products()

export{
    users,
    products
}
//index.js
