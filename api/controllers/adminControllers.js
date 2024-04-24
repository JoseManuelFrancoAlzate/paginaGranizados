const Admin = require('../models/Admin');



const getAdminController = async () => {
    try {
        const allAdmins = await Admin.findOne();
        return allAdmins;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los administradores');
    }
};
 
const postAdminControllers = async (user, password, repeatPassword,asset) => {
    try { 
        // Traemos el arreglo de administradores
        const allAdmins = await Admin.find();
        // Creamos una validación donde se indica que si ya hay más de un administrador, no se pueda crear más
        if (allAdmins.length < 1) {
            // Creamos el admin
            const newAdmin = new Admin({ user, password, repeatPassword, asset });
            // Lo guardamos
            await newAdmin.save();
            // Retornamos para enviar el resultado al handler
            return 'Admin creado '+ newAdmin;
        } else {
            return 'Ya existe un administrador';
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear el administrador');
    }
};

const putAdminController =  async(id, user, password)=>{
    try {
        const updateAdmin = await Admin.findByIdAndUpdate(id,{user, password}, { new: true })

        if(!updateAdmin  ){
            return 'Administrador no encontrado'
        }

        return  updateAdmin
    } catch (error) {
        throw new Error(error)
    }
}

const deleteAdminController = async(id)=>{
try {
    const deleteAdmin = await Admin.findByIdAndDelete(id)
if(!deleteAdmin){
    return 'Administrador no encontrado'
}

return {admin: deleteAdmin,  message: "Administrador eliminado"} 
} catch (error) {
    throw new Error(error)
}
}

module.exports = { getAdminController, postAdminControllers, putAdminController, deleteAdminController };
   