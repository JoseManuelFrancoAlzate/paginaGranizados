const {Router} = require('express')
const {getSlushysHandler, postSlushysHandler, putSlushysHandler, deleteSlushysHandler, getIdSlushyHandler, deleteImgSlushysHandlers} = require('../handlers/handlersSlushy')
const upload = require('../Multer/multerConfig')
const slushyRouter = Router()

//Todas las solicitudes a la raiz '/products' seran dirigidas al archivo './productsRouter' la cual esta dentro de la constante productsRouter
slushyRouter.get('/',getSlushysHandler)
slushyRouter.get('/:id',getIdSlushyHandler)
slushyRouter.post('/',upload.single('image'), postSlushysHandler)
slushyRouter.put('/:id', putSlushysHandler)
slushyRouter.delete('/:id', deleteSlushysHandler)
slushyRouter.delete('/delete/imgs', deleteImgSlushysHandlers)
module.exports = slushyRouter   