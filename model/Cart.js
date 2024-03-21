import { connection as db } from "../config/index.js";
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UsersAuthetication.js";
class Cart {


  fetchAllOrders(req, res) {
    const qry = `
    SELECT Cart.cart_item_id, Users.user_id, Products.product_id, Cart.quantity, (Cart.quantity * Products.price) AS total_price
    FROM Cart
    INNER JOIN Users ON Cart.user_id = Users.user_id
    INNER JOIN Products ON Cart.product_id = Products.product_id;
        `
    db.query(qry, (err, results) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        results
      })
    })
  }

  fetchUserOrder(req, res) {
    const qry = `
    SELECT Cart.cart_item_id, Users.user_id, Users.full_name AS buyers_name, Products.product_id, Products.product_name AS book_name, Cart.quantity, (Cart.quantity * Products.price) AS total_price
    FROM Cart
    INNER JOIN Users ON Cart.user_id = Users.user_id
    INNER JOIN Products ON Cart.product_id = Products.product_id
    WHERE Cart.user_id=${req.params.id};
        `
    db.query(qry,[req.params.id], (err, results) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        results
      })
    })
  }
  async addToCart(req, res) {
    let data = req.body;
    const qry = `
    INSERT INTO Cart
    SET ?;`;

    db.query(qry, [data], (err, result) => {
      if (err) throw err;
          res.json({
          status: res.statusCode,
          msg: "Added the order",
          result
        });
      // }
    });
  }
}
export {
  Cart
}
