import express from 'express'
import Controlador from '../controlador/libros.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/', this.controlador.inicio)
        this.router.get('/libros/:id?', this.controlador.obtenerLibros )
        this.router.post('/libros', this.controlador.guardarLibro)
        this.router.put('/libros/:id', this.controlador.actualizarLibro)
        this.router.delete('/libros/:id', this.controlador.borrarLibro)

        return this.router
    }

}

export default Router