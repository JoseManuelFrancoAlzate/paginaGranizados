const {Router} =  require('express')
const {getAdminHandler, postAdminHandler, putAdminHandler, deleteAdminHandler, putAdminAssetTrueHandler, putAdminAssetFalseHandler, restartPageAdminHandler}= require('../handlers/handlersAdmin')
const adminRouter = Router()

adminRouter.get('/', getAdminHandler)
adminRouter.post('/', postAdminHandler)
adminRouter.put('/:id', putAdminHandler)
adminRouter.put('/asset/true', putAdminAssetTrueHandler)
adminRouter.put('/asset/false', putAdminAssetFalseHandler)
adminRouter.delete('/:id', deleteAdminHandler)
adminRouter.delete('/page/restart', restartPageAdminHandler)
module.exports = adminRouter  