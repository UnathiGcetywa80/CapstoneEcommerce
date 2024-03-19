import express from 'express';
import bodyParser from 'body-parser';
import { verifyAToken } from  '../middleware/UsersAuthetication.js';
import {users} from '../model/index.js';

const usersRouter = express.Router()
usersRouter.get('/', (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})
usersRouter.post('/register', bodyParser.json(), (req, res)=>{
    try{
        users.createUser(req, res)
        }catch(e){
            res.json({
                status: res.statusCode,
                msg: 'There was an error registering you'
            })
        }
})
usersRouter.post('/login', bodyParser.json(), (req, res)=>{
    try{
        users.login(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'There was an error logging you in'
        })
    }
})
usersRouter.patch('/update/:user_id', bodyParser.json(), (req, res)=>{
    try{
        users.updateUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update a user'
        })
    }
})
usersRouter.delete('/delete/:user_id', bodyParser.json(), (req, res)=>{
    try{
        users.deleteUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete a user'
        })
    }
})
usersRouter.post('/logout', (req, res) => {
    try {
        users.logout(req, res);
    } catch (e) {
        res.status(200).json({
            status: 200,
            msg: 'You have successfully logged out'
        });
    }
})
export{
    usersRouter,
    express
}
//users.js








