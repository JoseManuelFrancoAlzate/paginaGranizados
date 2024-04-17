const { getSlushyController, postSlushysControllers } = require('../controllers/slushysControllers');

const getSlushysHandler = async (req, res) => {
    try {
        // Trae todos los slushys que hay en la base de datos MongoDB
        let allSlushys = await getSlushyController();
        res.status(200).json(allSlushys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los slushys' });
    }
};

const postSlushysHandler = async (req, res) => {
    try {
        const { name, image, price } = req.body;
        const createSlushy = await postSlushysControllers(name, image, price);
        res.status(201).json(createSlushy);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error al crear el slushy', error });
    }
};

module.exports = { getSlushysHandler, postSlushysHandler };



