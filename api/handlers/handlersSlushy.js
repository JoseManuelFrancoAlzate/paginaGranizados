const { getSlushyController, getIdSlushysControllers, postSlushysControllers, putSlushysController,deleteSlushysController, deleteImgsSlushysControllers} = require('../controllers/slushysControllers');

const getSlushysHandler = async (req, res) => {
    try {
        // Trae todos los slushys que hay en la base de datos MongoDB
        let allSlushys = await getSlushyController();
        res.status(200).json(allSlushys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los slushys', error: error.message });
    }
};

const getIdSlushyHandler = async (req, res)=>{
    const {id} = req.params
try {
    const slushysId = await getIdSlushysControllers(id);
    res.status(200).json(slushysId)
} catch (error) {
    res.status(400).json({error: error.message})
}
}

const postSlushysHandler = async (req, res) => {
    try {
        const { name, price, description} = req.body;
        
        const image = req.file.path
        const createSlushy = await postSlushysControllers(name, image, price, description);
        res.status(201).json(createSlushy);
    } catch (error) { 
        console.error(error);
        res.status(400).json({ message: 'Error al crear el slushy', error });
    }
};

const putSlushysHandler = async (req, res)=>{
    try {
        const {id} = req.params
        const {name, image, price, description} = req.body

        const uptadeSlushy = await putSlushysController(id,name,image,price, description)
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


const deleteImgSlushysHandlers =  async(req, res) => {
    try {
       await deleteImgsSlushysControllers();
        res.status(200).json({ message: "Imágenes eliminadas correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {getIdSlushyHandler, getSlushysHandler, postSlushysHandler, putSlushysHandler, deleteSlushysHandler, deleteImgSlushysHandlers};



