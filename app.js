const express = require('express')


const app = express()

const PORT = 3000;

//RUTAS

// levanta servidor
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

// arrancar servidor
//OP 1: node app.js
//OP 2: npm dev
//OP 3:

app.listen(PORT, () => {
    console.log(`Servidor corriendo en `)
})

// configurar ejs

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('indeeex')
})

app.get('/servicios', (req, res) => {
    res.render('Servicios')
})

app.get('/nosotros', (req, res) => {
    res.render('nosotros')
})