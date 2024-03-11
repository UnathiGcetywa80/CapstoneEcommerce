import { Connection as db } from "../config/index";
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UserAuthentication";
class users{
    fetchUsers(req, res){
        const qry = `
        SELECT 
        user_id, username,  email,
        full_name, created_at
        FROM 
        Users;
        `
        db.query(qry, (err,results)=>{
            if(err) throw err
            res.json({
             status: res.statusCode,
             results
            })
        })
        
    }
    fetchUser(req, res) {
        const qry = `
            SELECT user_id, username
            password, email, fullname
            FROM Users
            WHERE user_id = ${req.params.id};
            `;
        db.query(qry, (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          });
        });
      }
        async createUser(req, res){
            // payload
            let data = req.body
            data.password = await hash(data?.password, 15)
            let user = {
                email: data.email,
                password: data.password
            }
            const qry = `
            INSERT  INTO User
            set ?;
            `
            db.query(qry, [data], (err)=>{
                if(err) {
                    res.json({
                        status: res.statusCode,
                        msg: 'Please use another email address'
                    })
                }else{
                    //create a token

                    let token = createToken(user)
                    res.json({
                        status: res.statusCode,
                        token,
                        msg: "You're registered"
                    })
                }
            })
        }
    }
    export {
        users
    }