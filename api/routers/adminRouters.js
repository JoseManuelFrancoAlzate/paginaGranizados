const {Router} =  require('express')
const {getAdminHandler, postAdminHandler, putAdminHandler, deleteAdminHandler}= require('../handlers/handlersAdmin')
const adminRouter = Router()

adminRouter.get('/', getAdminHandler)
adminRouter.post('/', postAdminHandler)
adminRouter.put('/:id', putAdminHandler)
adminRouter.delete('/:id', deleteAdminHandler)
module.exports = adminRouter 