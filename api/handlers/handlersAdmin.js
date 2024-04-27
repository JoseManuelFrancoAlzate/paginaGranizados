const { getAdminController, postAdminControllers, putAdminController, deleteAdminController, restartPageAdminController, putAdminAssetTrueController,putAdminAssetFalseController} = require('../controllers/adminControllers');

const getAdminHandler = async (req, res) => {
    try {
        const allAdmins = await getAdminController();
        res.status(200).json(allAdmins);
    } catch (error) {
        console.error('Error al obtener los administradores:', error);
        res.status(500).json({ message: 'Error al obtener los administradores' });
    }
};

const postAdminHandler = async (req, res) => {
    try {
        const { user, password, repeatPassword } = req.body;
        if(password === repeatPassword) {
        const createAdmin = await postAdminControllers(user, password, repeatPassword);
        res.status(201).json(createAdmin);
    } else {
            res.status(201).json('las contraseñas no son iguales')
        }
    } catch (error) {
        console.error('Error al crear el administrador:', error);
        res.status(400).json({ message: 'Error al crear el administrador', error });
    }
};

const putAdminHandler = async (req,res)=>{
    const {id} = req.params;
    const {user, password} = req.body;
    try {
        const uptadeAdmin = await putAdminController(id, user, password)

        res.status(200).json({message: "El administrador se actualizo correctamente", admin: uptadeAdmin})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteAdminHandler = async(req,res)=>{
const {id} = req.params
try {
    const deleteAdmin = await deleteAdminController(id)
    res.status(200).json({admin: deleteAdmin})
} catch (error) {
    res.status(400).json({error: error.message})
}
}

const putAdminAssetTrueHandler = async(req,res)=>{
try {
    const putAdminAsset = await putAdminAssetTrueController()
   res.status(200).json(putAdminAsset)
} catch (error) {
    res.status(400).json({error:error.message})
}
}

const putAdminAssetFalseHandler = async(req,res)=>{
    try {
        const putAdminAsset = await putAdminAssetFalseController()
       res.status(200).json(putAdminAsset)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    }
const restartPageAdminHandler = async(req,res)=>{
    try {
       const restartPage =  await restartPageAdminController()
       res.status(200).json({message: 'Pagina reinicidada', admin: restartPage})
    } catch (error) {
      res.status(400).json({error: error.message})  
    }
}
  
module.exports = { getAdminHandler, postAdminHandler, putAdminHandler, deleteAdminHandler,restartPageAdminHandler, putAdminAssetTrueHandler, putAdminAssetFalseHandler};
