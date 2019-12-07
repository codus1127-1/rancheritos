require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const stripeLoader = require('stripe')
const moment = require('moment');
const path = require('path'); // Usually moved to the start of file
moment().format();




const {SERVER_PORT, CONNECTION_STRING, SECRET, STRIPE_SECRET} = process.env

const ctrl = require('./controllers/controller')
const authCtrl = require('./controllers/authController')

const app = express()

app.use( express.static( `${__dirname}/../build` ) );
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
    
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../build/index.html'));
    })
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

//Stripe End Points
const stripe = new stripeLoader(STRIPE_SECRET);

const charge = (token, amt) => {
    return stripe.charges.create({
        amount: +(amt * 100),
        currency: 'usd',
        source: token,
        description: "Statement Description"
    })
}

app.post('/auth/payment', async (req, res, next) => {
    console.log(req.body)
    try {
        let data = await charge(req.body.token.id, req.body.amount);
        console.log(data);
        res.send("Charged");
    } catch(e) {
        console.log(e)
        res.status(500)
    }
})

massive(CONNECTION_STRING).then(database => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
}) 