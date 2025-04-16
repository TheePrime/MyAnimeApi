
import mongoose from 'mongoose'
import {Logger} from 'borgen'


const connectDB =(startserver)=>{
    mongoose.connect("mongodb://127.0.0.1:27017/anime")
    .then(()=> {
        Logger.info({
            message: `Connected to database...`,
            messageColor: "gray"
        })

        startserver()

        
            })
            .catch((err)=>{
                console.log(err)
                Logger.info({
                    message: "ConnectDb" +  err.message
        })
    })
}

export default connectDB