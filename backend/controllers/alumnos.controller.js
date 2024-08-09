import {modelo} from '../models/alumnos.model.js'

export const testAlumno = () => {
    console.log("Llamando la funcion desde el controlador")
}
modelo.create({
    name: "Roman",
},
    {
    email: "roman@gmail.com"
})