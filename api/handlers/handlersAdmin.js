const { getAdminController, postAdminControllers } = require('../controllers/adminControllers');

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
        const { user, password } = req.body;
        const createAdmin = await postAdminControllers(user, password);
        res.status(201).json(createAdmin);
    } catch (error) {
        console.error('Error al crear el administrador:', error);
        res.status(400).json({ message: 'Error al crear el administrador', error });
    }
};

module.exports = { getAdminHandler, postAdminHandler };
