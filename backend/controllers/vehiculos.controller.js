import {modelo} from '../models/vehiculos.model.js'

export const testVehiculo = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    marca: "Nissan",
},
    {
    type: "Carro"
})