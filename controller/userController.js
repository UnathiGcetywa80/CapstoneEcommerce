const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/authentication')
const routes = express.Router()
//Import all model's objects
const {users, products} = require('../model')
//User's router
routes.get('/Users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/Users/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register',bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
routes.put('/User/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
routes.patch('/User/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
routes.delete('/User/:id', (req, res)=>{
    users.delete(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})

module.exports = {
    express,
    routes,
    verifyAToken
}