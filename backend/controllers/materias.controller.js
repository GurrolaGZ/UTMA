import {modelo} from '../models/materias.model.js'

export const testMateria = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Historia",
},
    {
    calificacion: 9.0 
})