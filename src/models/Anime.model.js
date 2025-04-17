import {model, Schema}  from 'mongoose'


const AnimeSchema = new Schema({


    mal_id:{
        type: Number
    },
    title:{
        type:String
    },
    image: {
        type: String
    },
    episodes:{
        type: Number
    },
    score: {
        type: Number
    },


},

{timestamps:true}
)

const Anime = model("Anime", AnimeSchema)

export default Anime