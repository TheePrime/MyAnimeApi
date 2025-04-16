import {model, Schema} from 'mongoose'


const ProductSchema = new Schema({
        name:{
            type:String,
            required: true
        },

        quantity:{
            type: Number,
            required:true,
            default:0
        },


},
    {
        timestamps:true
    }
)


const Product = model("Product", ProductSchema)

export default Product