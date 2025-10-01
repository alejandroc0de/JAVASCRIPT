const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const {Pool} = require('pg');
const pool = new Pool({
    user : 'alejandrocarrillo',
    host:'localhost',
    database: 'cuestionario_unisalle',
    password: 'root',
    port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));



app.post('/submit', async(req,res) => {
    const {nombre,apellido,semestre,feedback} = req.body;
    try{
        const result = await pool.query(
            'INSERT INTO respuestas (nombre,apellido,semestre,feedback) VALUES ($1,$2,$3,$4) RETURNING *',
            [nombre,apellido,semestre,feedback]
        );
        console.log("Guardado en la DB: ", result.rows[0])
        res.send("Respuesta guardada")
    }
    catch(err){
        console.log("Error al guardar en la DB; ", err)
        res.status(500).send("Error al guardar en la DB")
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})