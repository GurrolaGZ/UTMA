import { Schema, model } from 'mongoose'
export const esquema = new Schema ({
    marca:{
     type:String
    },
    type:{
        type:String
    }
 })
 

 export const modelo = new model('Vehiculo', esquema)