const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
const port = 3000


app.get('/login', (req, res) => {
    // Redirecione para a página de login
    res.redirect('m1\public\login.html');
});

app.listen(port, () => {
    console.log('App a utilizar a porta: ${port}')
})