import { Router } from "express";
import { 
    getAll, 
    getOne, 
    insertOne,
    updateOne,
    deleteOne,
    mostrarPaginaPartes,
    mostrarPaginaAgregarParte,
    mostrarPaginaIndex,
    mostrarPaginaEditarEliminar
} from "../controllers/carparts.controller.js";

const router = Router();

// Ruta para obtener todas las partes de carros
router.get('/', getAll);

// Ruta para obtener una sola parte de carro por número de parte
router.get('/:partNumber', getOne);

// Ruta para insertar una parte de carro
router.post('/', insertOne);

// Ruta para actualizar una parte de carro
router.post("/:partNumber", updateOne);

// Ruta para eliminar una parte de carro
router.get("/deleteOne/:partNumber", deleteOne);

router.get('/partes/mostrar', mostrarPaginaPartes);

router.get('/partes/agregar', mostrarPaginaAgregarParte);

router.get('/partes/edieli', mostrarPaginaEditarEliminar);

router.get('/partes/inicio', mostrarPaginaIndex);


export default router;
