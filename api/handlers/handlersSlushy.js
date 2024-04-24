const { getSlushyController, postSlushysControllers, putSlushysController,deleteSlushysController} = require('../controllers/slushysControllers');

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
        const { name, price } = req.body;
        
        const image = req.file.path
        const createSlushy = await postSlushysControllers(name, image, price);
        res.status(201).json(createSlushy);
    } catch (error) { 
        console.error(error);
        res.status(400).json({ message: 'Error al crear el slushy', error });
    }
};

const putSlushysHandler = async (req, res)=>{
    try {
        const {id} = req.params
        const {name, image, price} = req.body

        const uptadeSlushy = await putSlushysController(id,name,image,price)
        res.status(200).json(uptadeSlushy)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteSlushysHandler = async (req, res)=>{
    const {id} = req.params

    try {

        const deleteSlushys = await deleteSlushysController(id)
        res.status(200).json({slushy: deleteSlushys})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getSlushysHandler, postSlushysHandler, putSlushysHandler, deleteSlushysHandler};



