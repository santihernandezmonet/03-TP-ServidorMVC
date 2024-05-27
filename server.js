import express from 'express'
import RouterLibros from './router/libros.js'


const app = express()
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', new RouterLibros().start())

const  PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor ApiRest escuchando escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))