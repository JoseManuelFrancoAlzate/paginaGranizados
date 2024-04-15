const {Router} = require('express')
const granizadosRouter = require('./GranizadosRouter')

const router = Router()

//Todas las solicitudes a la raiz '/products' seran dirigidas al archivo './productsRouter' la cual esta dentro de la constante productsRouter

router.use('/slushys', granizadosRouter)


module.exports = router 