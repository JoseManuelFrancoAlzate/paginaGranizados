require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express(); 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json 
app.use(bodyParser.json());

app.use('/', require('./routers/index')) 

//REINICIAR BASE DE DATOS
/*
async function connectAndResetDatabase() {
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

// Llama a la función connectAndResetDatabase() para iniciar la conexión a la base de datos y reiniciarla
connectAndResetDatabase();*/
//Verificamos que el puerto de .env funcione
const port = process.env.PORT || 3000; 
  
// Conexión a la base de datos MongoDB
const uri = process.env.MONGODB_URI    
 
mongoose.connect(uri) 
    .then(() => console.log('Base de datos conectada')) 
    .catch(e => console.log(e)); 
 
app.listen(port, () => {  
    console.log(`Servidor corriendo en el puerto ${port}`);
});
   