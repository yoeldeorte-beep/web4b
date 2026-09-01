const express = require('express')


const app = express()


//RUTAS
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/servicios'), (req,res) => {
    res.send('servicios');
}

// levanta servidor
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

// arrancar servidor
//OP 1: node app.js
//OP 2: npm dev
//OP 3: