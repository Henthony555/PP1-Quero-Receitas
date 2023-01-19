const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false})
const { Op } = require("sequelize");
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')));

const exphbs = require('express-handlebars')
app.use(express.static(path.join(__dirname, '/views')));
app.set('views', path.join(__dirname, '/views'))
app.engine('hbs',
    exphbs.engine({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: path.join(__dirname, 'views/layouts')
    }))
app.set('view engine', 'hbs')

// Rotas
app.get('/', (req, res) => {
    res.render('home')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
});

app.get('/enviarReceita', (req, res) => {
    res.render('enviarReceita')
});

app.get('/perfio', (req, res) => {
    res.render('perfio')
});

app.get('/listarReceita', (req, res) => {
    res.render('listarReceita')
});

app.get('/receitaCompleta', (req, res) => {
    res.render('receitaCompleta')
});

app.listen(port, () => {
    console.log(`Esta aplicação está escutando a porta ${port}`)
})