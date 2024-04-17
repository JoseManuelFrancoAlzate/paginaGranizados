const {Router} = require('express')
const {getSlushysHandler, postSlushysHandler} = require('../handlers/handlersSlushy')

const slushyRouter = Router()

//Todas las solicitudes a la raiz '/products' seran dirigidas al archivo './productsRouter' la cual esta dentro de la constante productsRouter

slushyRouter.get('/',getSlushysHandler)
slushyRouter.post('/', postSlushysHandler)
module.exports = slushyRouter  