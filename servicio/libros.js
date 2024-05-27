import Modelo from '../modelo/libros.js'

class Servicio {
    constructor() {
        this.model = new Modelo()
    }

    obtenerLibros = (id) => {
        if(id) {
            const libro = this.model.obtenerLibro(id)
            return libro
        }
        else {
            const libros = this.model.obtenerLibros()
            return libros
        }
    }

    guardarLibro = (libro) => {
        const libroGuardado = this.model.guardarLibro(libro)
        return libroGuardado

    }

    actualizarLibro = (id, libro) => {
        const libroActualizado = this.model.actualizarLibro(id, libro)
        return libroActualizado
    }

    borrarLibro = (id) => {
        const libroEliminado = this.model.borrarLibro(id)
        return libroEliminado
    }


}

export default Servicio