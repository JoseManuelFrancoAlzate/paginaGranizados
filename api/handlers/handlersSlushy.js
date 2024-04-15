

const getSlushysHandler = async (req,res)=>{
try {
    
 res.status(200).json('Hola Backend')
} catch (error) {
    console.log(error)
}
}

 module.exports = {getSlushysHandler}





