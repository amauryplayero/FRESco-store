require('dotenv').config({path: __dirname + '/../.env'})
const express = require('express')
const cors = require('cors')
// const path = require('path')
const PORT = 3001
const app = express()
const ctrl = require('./controller')



app.use(cors())
app.use(express.static('public'))

app.get("/soaps", ctrl.getSoaps)
app.get("/cds", ctrl.getCds)
app.put("/showCart/:id", ctrl.showCart)
app.post('/create-checkout-session', ctrl.checkOut)



app.listen(PORT, ()=>{console.log("listening on" + PORT)})


