import {modelo} from '../models/director.model.js'

export const testDirector = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Juan",
},
    {
    email: "juan@gmail.com"
})