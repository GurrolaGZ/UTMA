import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import  {testAlumno}  from "./backend/controllers/alumnos.controller.js";
import  { testDirector }  from "./backend/controllers/director.controller.js";
import  { testMaestro }  from "./backend/controllers/maestro.controller.js";
import  { testMateria }  from "./backend/controllers/materias.controller.js";
import  { testSalon }  from "./backend/controllers/salones.controller.js";
import  { testVehiculo }  from "./backend/controllers/vehiculos.controller.js";
dontenv.config();


mongoose.connect(process.env.url_bd)
.then(() => {
    console.log('jalo')
})
.catch((err) => {
    console.log('no jalo', err)
})

const app=express();
app.use(cors())

app.listen(4000, () => {
    console.log('Esta funcionando correctamente tu servidor local')
})

testAlumno()
testDirector()
testMaestro()
testMateria()
testSalon()
testVehiculo()