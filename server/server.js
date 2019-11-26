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
    saveUninitialized: true,
    secret: SECRET,
    cookie: {secure: false}
}))
//Authentication
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

//Menu Categories
app.get('/category', ctrl.getCategories)
app.get('/category/items/:category', ctrl.getItems)

///Menu Items
app.post('/category/items', ctrl.addToCart)
app.get('/add-ons', ctrl.getAddOns)

//Shopping Cart
app.get('/cart', ctrl.getCart)
app.delete('/cart/:index', ctrl.deleteCart)
app.post('/order', ctrl.submitOrder)

//Admin
app.get('/orders', ctrl.getOrders)
app.put('/order/:id', ctrl.updateOrders)



massive(CONNECTION_STRING).then(database => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})