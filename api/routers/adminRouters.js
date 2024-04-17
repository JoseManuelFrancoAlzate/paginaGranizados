const {Router} =  require('express')
const {getAdminHandler, postAdminHandler}= require('../handlers/handlersAdmin')
const adminRouter = Router()

adminRouter.get('/', getAdminHandler)
adminRouter.post('/', postAdminHandler)
module.exports = adminRouter 