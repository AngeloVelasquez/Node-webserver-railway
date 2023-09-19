require('dotenv').config()
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// middleware Servir contenido estatico
app.use( express.static('public') )

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Ricardo',
        titulo: 'Curso Escuela Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Ricardo',
        titulo: 'Curso Escuela Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Ricardo',
        titulo: 'Curso Escuela Node'
    })
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})