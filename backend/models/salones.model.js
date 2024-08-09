import { Schema, model } from 'mongoose'
export const esquema = new Schema ({
    name:{
     type:String
    },
    numero:{
        type:Number
    }
 })
 

 export const modelo = new model('Salon', esquema)