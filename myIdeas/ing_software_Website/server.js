const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

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

app.get('/respuestas', async(req,res) => {
    try{
        const result = await pool.query('SELECT * FROM respuestas');
        res.json(result.rows)
    } catch (err){
        console.error("Error al consultar la base de datos")
        res.status(500).send("Error al consultar la base de datos");
    }
});


app.delete('/respuestas/:id', async (req,res) => {
    const {id} = req.params;
    try{
        const result = await pool.query(
            'DELETE FROM respuestas WHERE id = $1 RETURNING *',
            [id]
        );
        console.log(result)
        if(result.rowCount === 0){
            console.log("Objeto no existe en la base de datos o error al eliminar")
            return res.status(404).send("No se encontre el ID en la base de datos")
        }
        console.log("Elemento borrado")
        res.json({message: "Respuesta eliminada", deleted: result.rows[0]});
    }catch(err){
        console.log("Error al eliminar", err)
        res.status(500).send("error al eliminar");
    }
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

