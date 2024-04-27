const Admin = require('../models/Admin');
const mongoose = require('mongoose');



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

const putAdminAssetTrueController = async () => {
    try {
      // Actualizar el campo 'asset' del primer documento en la colección
      const updatedAdmin = await Admin.findOneAndUpdate(
        {}, // Sin condiciones de búsqueda (todos los documentos)
        { asset: true }, // Establecer 'asset' como true en el documento encontrado
        { new: true } // Devolver el documento actualizado
      );
  
      if (!updatedAdmin) {
        console.log('No se encontró ningún documento para actualizar');
        return null;
      }
  
      console.log('Documento actualizado:', updatedAdmin);
      return updatedAdmin;
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
      throw error; // Lanza el error para que sea manejado por el controlador
    }
  };
  
const putAdminAssetFalseController = async()=>{
    try {
        // Actualizar el campo 'asset' del primer documento en la colección
        const updatedAdmin = await Admin.findOneAndUpdate(
          {}, // Sin condiciones de búsqueda (todos los documentos)
          { asset: false }, // Establecer 'asset' como true en el documento encontrado
          { new: true } // Devolver el documento actualizado
        );
    
        if (!updatedAdmin) {
          console.log('No se encontró ningún documento para actualizar');
          return null;
        }
    
        console.log('Documento actualizado:', updatedAdmin);
        return updatedAdmin;
      } catch (error) {
        console.error('Error al actualizar el documento:', error);
        throw error; // Lanza el error para que sea manejado por el controlador
      }
}
const restartPageAdminController = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Reiniciar la base de datos después de que la conexión se haya establecido
        await mongoose.connection.db.dropDatabase();
        console.log('Base de datos reiniciada exitosamente');
    } catch (error) {
        console.error('Error al reiniciar la base de datos:', error);
    } 
}
module.exports = { getAdminController, postAdminControllers, putAdminController, deleteAdminController, restartPageAdminController, putAdminAssetTrueController,putAdminAssetFalseController};
   