import express from 'express'
import {Logger} from 'borgen'
import connectDB from './connect.js'
import Product from './Product.model.js'

const app = express()
const PORT = process.env.PORT || 3000



//Middleware
app.use(express.json())

app.get('/', (req,res)=>{

    res.send("Hello world")
})

app.post('/api/products', async (req,res)=>{
    const {name, quantity} = req.body

    const product = await Product.create(req.body)

    console.log(req.body)
    res.send(req.body)
})



const startserver= ()=>{
    app.listen(PORT, ()=>{

        Logger.info({
            message: `Server is running on port ${PORT}`,
            messageColor: "cyan"
        })
    })
}


connectDB(startserver)