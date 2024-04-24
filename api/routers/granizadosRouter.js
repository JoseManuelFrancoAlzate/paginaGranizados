const {Router} = require('express')
const {getSlushysHandler, postSlushysHandler, putSlushysHandler, deleteSlushysHandler} = require('../handlers/handlersSlushy')
const upload = require('../Multer/multerConfig')
const slushyRouter = Router()

//Todas las solicitudes a la raiz '/products' seran dirigidas al archivo './productsRouter' la cual esta dentro de la constante productsRouter
slushyRouter.get('/',getSlushysHandler)
slushyRouter.post('/',upload.single('image'), postSlushysHandler)
slushyRouter.put('/:id', putSlushysHandler)
slushyRouter.delete('/:id', deleteSlushysHandler)
module.exports = slushyRouter  