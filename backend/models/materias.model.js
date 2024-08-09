import { Schema, model } from 'mongoose'
export const esquema = new Schema ({
    name:{
     type:String
    },
    calificacion:{
        type:Number
    }
 })
 

 export const modelo = new model('Materia', esquema)