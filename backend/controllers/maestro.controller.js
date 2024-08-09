import {modelo} from '../models/maestro.model.js'

export const testMaestro = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Pancho",
},
    {
    email: "pancho@gmail.com"
})