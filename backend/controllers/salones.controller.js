import {modelo} from '../models/salones.model.js'

export const testSalon = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Auditorio",
},
    {
    numero: 202
})