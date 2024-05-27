class Modelo {
    #libros = []

    constructor(){
        this.#libros = [
            {id: '1', titulo: 'Habitos Atómicos', autor: 'James Clear', año: 2018 },
        ]
    }

    obtenerLibros = () => this.#libros

    obtenerLibro = id => {
        const libro = this.#libros.find( l => l.id === id )
        return libro || {}
    }

    guardarLibro = (libro) => {
        const id = String(parseInt(this.#libros[this.#libros.length-1]?.id || 0) + 1)
        const libroConId = {id, ...libro}
        this.#libros.push(libroConId)

        return libroConId
    }

    actualizarLibro = (id, libro) => {
        const i = this.#libros.findIndex( libro => libro.id === id)
        if(i != -1) {
            const libroAnt = this.#libros[i]
            const libroAct = {...libroAnt, ...libro}
            this.#libros.splice(i, 1, libroAct)
            return libroAct
        }
        else {
            return {}
        }
    }

    borrarLibro = id => {
        let libro = {}

        const i = this.#libros.findIndex( libro => libro.id === id)
        if (i != -1) {
            libro = this.#libros.splice(i, 1)[0]
        }
        return libro
    }

}

export default Modelo