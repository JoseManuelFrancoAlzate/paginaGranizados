const Granizados = require('../models/Granizados');

const getSlushyController = async () => {
    try {
        const allSlushys = await Granizados.find();
        return allSlushys;
    } catch (error) {
        console.error('Error al obtener los granizados:', error);
        throw error;
    }
};

const postSlushysControllers = async (name, image, price) => {
    try {
        const existingSlushy = await Granizados.findOne({ name });
        if (existingSlushy) {
            return { message: 'Ya existe este granizado' };
        }

        const newSlushy = new Granizados({ name, image, price });
        const createdSlushy = await newSlushy.save();
 
        return createdSlushy;
    } catch (error) {
        console.error('Error al crear el granizado:', error);
        throw error;
    }
};

module.exports = { getSlushyController, postSlushysControllers };

