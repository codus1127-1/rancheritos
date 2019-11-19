require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const ctrl = require('./controllers/controller')
const authCtrl = require('./controllers/authController')

const app = express()

app.use(express.json())
app.use(
    session({
    resave: true,
    saveUninitialized: false,
    secret: SECRET
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

app.get('/category', ctrl.getCategories)
app.get('/category/items/:category', ctrl.getItems)


massive(CONNECTION_STRING).then(database => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})