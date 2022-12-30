import { Router } from 'express';
import controller from '../controllers/controller.js';

const router = Router();

// Rutas para el renderizado de las vistas.
router.get("/", controller.list);


// Rutas mediante el método POST


export default router
