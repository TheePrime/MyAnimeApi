import express from 'express'
import {Logger} from 'borgen'
import connectDB from './connect.js'
import { fetchAndSaveAnime } from './controllers/animeController.js'
import router from './routes/router.js'


const app = express()
const PORT = process.env.PORT || 3000



//Middleware
app.use(express.json())

app.get('/', (req,res)=>{
    
    res.send("Hello AnimeWorld")
})

app.use(router)



const startserver= ()=>{
    app.listen(PORT, ()=>{

        Logger.info({
            message: `Server is running on port ${PORT}`,
            messageColor: "cyan"
        })
        fetchAndSaveAnime()
    })
}


connectDB(startserver)