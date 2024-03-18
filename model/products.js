import { connection as db } from "../config/index.js";
class Products{
    fetchProducts(req, res){
        const qry = `
        SELECT * FROM Products;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
        
    fetchProduct(req, res){
        const qry = `
        SELECT * FROM Products WHERE product_id = '${req.params.id}';
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: result[0]
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