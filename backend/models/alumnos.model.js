import { Schema, model } from 'mongoose'
export const esquema = new Schema ({
    name:{
     type:String
    },
    email:{
        type:String
    }
 })
 

 export const modelo = new model('Alumno', esquema)