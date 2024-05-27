import Servicio from '../servicio/libros.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    inicio = (req, res) => {
        res.sendFile( process.cwd() + '/public/index.html')
    }

    obtenerLibros = (req, res) => {
        const { id } = req.params
        const libros = this.servicio.obtenerLibros(id)
        res.json(libros)
    }

    guardarLibro = (req,res) => {
        const libro = req.body
        const libroGuardado = this.servicio.guardarLibro(libro)
        res.json(libroGuardado)
    }

    actualizarLibro = (req,res) => {
        const { id } = req.params
        const libro = req.body
        const libroActualizado = this.servicio.actualizarLibro(id, libro)
        res.json(libroActualizado)
    }

    borrarLibro = (req,res) => {
        const { id } = req.params
        const libroEliminado = this.servicio.borrarLibro(id)
        res.json(libroEliminado)
    }
}

export default Controlador


