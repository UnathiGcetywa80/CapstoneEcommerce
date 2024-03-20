import { connection as db } from "../config/index.js";
class Products {

    fetchProducts(req, res) {
        const qry = `
        SELECT product_id,product_name,category, price,stock_quantity,description,created_at,Image FROM Products;
        `
        db.query(qry, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    fetchProduct(req, res) {
        const qry = `
        SELECT product_id,product_name,category, price,stock_quantity,description,created_at,Image 
        FROM Products WHERE product_id =${req.params.id};
        `
        db.query(qry, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    addProduct(req, res) {
        const qry = `insert into Products set ?;`
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Product successfully added'
            })
        })
    }
    deleteProduct(req, res) {
        const qry = `DELETE FROM Products WHERE product_id=${req.params.id} ;`
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Product successfully deleted'
            })
        })
    }


}
export {
    Products
}