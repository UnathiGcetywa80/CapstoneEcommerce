import { connection as db } from "../config/index.js";
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UsersAuthetication.js";
class Users {
  fetchUsers(req, res) {
    const qry = `
        SELECT user_id,username, password,
        email, userRole, full_name, created_at FROM
        Users;
        `
    db.query(qry, (err, results) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        results
      })
    })
  }
  fetchUser(req, res) {
    const qry = `SELECT user_id, username, password,
        email, userRole, full_name, created_at FROM Users
            WHERE user_id = ${req.params.user_id};
            `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      })
    })
  }
  async createUser(req, res) {
    // payload
    let data = req.body
    data.password = await hash(data?.password, 10)
    let user = {
      email: data.email,
      password: data.password
    }
    const qry = `
            insert into Users
            set ?;
            `
    db.query(qry, [data], (err, result) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: 'This email address already exists',
          result
        })
      } else {
        // create a token
        let token = createToken(user)
        res.json({
          status: res.statusCode,
          token,
          msg: 'You\'re registered',
          result
        })
      }
    })
  }
  async updateUser(req, res) {
    const data = req.body;
    if (data?.password) {
      data.password = await hash(data.password, 8);
    }
    const qry = `
              UPDATE Users
              SET ?
              WHERE user_id = ?`;
    db.query(qry, [data, req.params.user_id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'The user information is updated',
      });
    });
  }
  async deleteUser(req, res) {
    const qry = `
              DELETE FROM Users
              WHERE user_id = ?`;
    db.query(qry, [req.params.user_id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'User has been deleted',
      });
    });
  }
  login(req, res) {
    const { email, password } = req.body
    const qry = `
        SELECT user_id, username, password,
        email, userRole, full_name, created_at
        FROM Users
        WHERE email='${email}';
        `
    db.query(qry, async (err, result) => {
      if (err) throw err
      if (!result?.length) {
        res.json({
          status: statusCode,
          msg: "Wrong email address provided"
        })
      } else {
        const validPass = await compare(password, result[0].password)
        if (validPass) {
          const token = createToken({
            email,
            password
          })
          res.json({
            status: res.statusCode,
            msg: "you're logged in",
            token,
            result : result[0]
          })
        } else {
          res.json({
            status: res.statusCode,
            msg: "Please provide the correct password"
          })
        }
      }
    })
  }
}
export {
  Users
}
