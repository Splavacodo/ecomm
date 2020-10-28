const express = require('express'); 
const bodyParser = require('body-parser'); //middleware function/library
const cookieSession = require('cookie-session'); //another middleware library 
const authRouter = require('./routes/admin/auth'); 
const adminProductsRouter = require('./routes/admin/products'); 
const productsRouter = require('./routes/products'); 
const cartsRouter = require('./routes/carts'); 

const app = express(); 

app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended:true})); //used inside of post requests
app.use(cookieSession({
    keys: ['awedftgiljzmkc1g8b9s']
})); 

app.use(authRouter); 
app.use(adminProductsRouter); 
app.use(productsRouter); 
app.use(cartsRouter); 

app.listen(3000, () => {
    console.log('listening'); 
})