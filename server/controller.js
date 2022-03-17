require('dotenv').config({path: __dirname + '/../.env'})
const stripe = require('stripe')('sk_test_51KeNN1Fz6IsrEsyrQEqENjXwnFQFQiX5mgsRbDV0iH3hX5HjS0R7Bboue2XWbqhdcgNgmwUOr42ujWOyMikF6wdA00O2X4FaIH')

const {DATABASE_URL} = process.env
const Sequelize = require('sequelize')
const myUrl = "http://localhost:3003"


const sequelize = new Sequelize(DATABASE_URL,{
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {   
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getSoaps:(req,res)=>{
        sequelize.query(`
        SELECT * FROM products
        WHERE type = 'Soap'
        `)
        .then(dbRes=> res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))

    },
    getCds:(req,res)=>{
        sequelize.query(`
        SELECT * FROM products
        WHERE type = 'cd'
        `)
        .then(dbRes=> res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    showCart:(req,res)=>{
        const productId = req.params.id
    
        sequelize.query(`
        SELECT * FROM products
        WHERE product_id = ${productId};
        `)
        .then(dbRes=> res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    checkOut: (req,res)=>{
        const session = stripe.checkout.sessions.create({
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1KeNpjFz6IsrEsyrgP9fbzcx',
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${myUrl}?success=true`,
            cancel_url: `${myUrl}?canceled=true`,
          }).then(()=>res.status(200).send(session.url))
        
    }
   
    

    

}