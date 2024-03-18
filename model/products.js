import { connection as db } from "../config/index.js";
class Products{
    fetchProducts(req, res){
        const qry = `
        select product_name category price stock_quantity description created_at imagURL
        from Products;
        `
        db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req, res){
        const qry = `
        select product_name category price stock_quantity description created_at imagURL
        from Products
        where product_id = ${req.params.product_id}`
        db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    addProduct(req, res){
        const qry = `insert into Products set ?;`
        db.query(qry,[req.body] ,(err) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Product successfully added'
            })
    })
}}
export{
    Products
}