const Admin = require('../models/Admin');

const getAdminController = async () => {
    try {
        const allAdmins = await Admin.find();
        return allAdmins;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los administradores');
    }
};

const postAdminControllers = async (user, password) => {
    try { 
        // Traemos el arreglo de administradores
        const allAdmins = await Admin.find();
        // Creamos una validación donde se indica que si ya hay más de un administrador, no se pueda crear más
        if (allAdmins.length < 1) {
            // Creamos el admin
            const newAdmin = new Admin({ user, password });
            // Lo guardamos
            await newAdmin.save();
            // Retornamos para enviar el resultado al handler
            return newAdmin;
        } else {
            return 'Ya existe un administrador';
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear el administrador');
    }
};

module.exports = { getAdminController, postAdminControllers };
