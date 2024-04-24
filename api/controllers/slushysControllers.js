const Granizados = require('../models/Granizados');
const cloudinary = require('../Cloudinary/claudinaryConfig')
// Configurar Multer para procesar el archivo de imagen

const getSlushyController = async () => {
    try {
        const allSlushys = await Granizados.find();
        return allSlushys;
    } catch (error) {
        console.error('Error al obtener los granizados:', error);
        throw error;
    }
};


//SOY IMPORTANTE, RECUERDA ANALIZARME
//SE QUE EN ESTOS MOMENTOS NO LO HARAS PORQUE ESTAS CANSADO MENTALMENTE Y ORGANIZARAS IMAGENES
//PERO SOY IMPORTANTE, HAZLO MAÑANA
const postSlushysControllers = async (name, image, price) => {
    try {
        const existingSlushy = await Granizados.findOne({ name });
        if (existingSlushy) {
            return { message: 'Ya existe este granizado' };
        }
        
        // Subir imagen a Cloudinary
        const cloudinaryUploadResponse = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload(image, { folder: 'BuenosGranizados' }, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

        // Obtener la URL de la imagen cargada desde la respuesta de Cloudinary
        const imageUrl = cloudinaryUploadResponse.secure_url;

        // Crear nuevo granizado con la URL de la imagen
        const newSlushy = new Granizados({ name, image: imageUrl, price });
        const createdSlushy = await newSlushy.save();

        return createdSlushy; // O cualquier otra respuesta que desees enviar

    } catch (error) {
        console.error(error);
        throw error;
    }
};



const putSlushysController = async(id, name, image, price)=>{ 
try {
    const existingSlushy = await Granizados.findOne({ name });
    const uptadeSlushy = await Granizados.findByIdAndUpdate(id,{ name, image, price}, {new: true})
 
    if (existingSlushy) { 
        return { message: 'Ya existe este granizado' };
    }else if(!uptadeSlushy){
        return 'Granizado no encontrado'
    }

    return {slushy: uptadeSlushy ,message: 'Granizado actualizado correctamente'}

} catch (error) {
    throw new Error(error)
}
}

const deleteSlushysController =  async(id)=>{
try {
    const deleteSlushys =await  Granizados.findByIdAndDelete(id)

    if(!deleteSlushys){
        return 'Granizado no encontrado'
    }
    return {slushy: deleteSlushys, message: "Granizado eliminado exitosamente"}
} catch (error) {
    throw new Error(error)
}
}

module.exports = { getSlushyController, postSlushysControllers, putSlushysController, deleteSlushysController};

