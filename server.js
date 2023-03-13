require('dotenv').config({ path:'.env' })
const express = require('express')
const cors = require('cors')
const app = express()

app.get('/', (req, res) => {
   res.send('<h1><center> Aqui seria bom para mostrar todos os membros </center></h1>') 
})

app.put('/register', (req, res) => {
   // CÓDIGO PARA CADASTRAR O ORADOR)

})

app.listen(process.env.PORT, console.log('Servidor executanto em http://localhost:3001'))