const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const cors = require('cors');

const port = 5000;
const app = express();

app.use(cors())
app.use(bodyParser.json()); // Menggunakan parser untuk data JSON
app.use(bodyParser.urlencoded({ extended: true })); // Menggunakan parser untuk data URL-encoded


// get all items
app.get('/api/items', async (req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM items');
        res.json(result.rows);
    }catch(err){
        res.status(500).send('Server Error')
    }
})

// post new items
app.post('/api/items', async (req, res) => {
    try {
        const { name, price, quantity, description } = req.body;
        const result = await pool.query(
            'INSERT INTO items(name, price, quantity, description) VALUES($1, $2, $3, $4) RETURNING *',
            [name, price, quantity, description]
        );
        
        // Pastikan item berhasil disisipkan
        if (result.rows.length > 0) {
            res.status(201).json(result.rows[0]); // Gunakan status code 201 untuk item yang berhasil dibuat
        } else {
            res.status(500).send('Failed to create item'); // Jika gagal menyisipkan item, kirim respons kesalahan
        }
    } catch (err) {
        console.error(err.message); // Tampilkan pesan kesalahan aktual di konsol
        res.status(500).send('Server Error');
    }
});

// edit items
app.put('/api/items/:id', async (req,res)=>{
    try{
        const id = req.params.id;
        const {name,price,quantity, description} = req.body;
        const result = await pool.query('UPDATE items SET name=$1,price=$2,quantity=$3,description=$4 WHERE id=$5 RETURNING *', [name,price,quantity,description,id]);
        res.send(result.rows[0]);
    }catch(err){
        res.status(500).send('Server Error')
    }
})

// delete item
app.delete('/api/items/:id', async (req,res)=>{
    try{
        const id = req.params.id;
        const result = await pool.query('DELETE FROM items WHERE id=$1', [id]);
        res.json({message: 'Item Deleted'});
    }catch(err){
        res.status(500).send('Server Error')
    }
})

if (require.main === module) {
    app.listen(port, () => {
      console.log(`Server berjalan di http://localhost:${port}`);
    });
  }
  
  module.exports = app;