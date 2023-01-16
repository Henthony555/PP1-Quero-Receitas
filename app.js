const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const exphbs = require('express-handlebars')
const path = require('path')
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
    res.render('home',  {
        styles: '<link rel="stylesheet" href="/css/home.css">'
                +'<link rel="stylesheet" href="/css/multi-select-tag.css">',
        scripts: '<script src="/js/home.js"></script>'
                +'<script src="/js/multi-select-tag.js"></script>'  
    })
});

app.get('/login', (req, res) => {
    res.render('login', {
        styles: '<link rel="stylesheet" href="/css/login.css">',
        scripts: '<script src="/js/login.js"></script>'
                +'<script src="/js/slideImagen.js"></script>'  
    })
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro', {
        styles: '<link rel="stylesheet" href="/css/cadastro.css">',
        scripts: '<script src="/js/cadastro.js"></script>' 
    })
});

app.get('/enviarReceita', (req, res) => {
    res.render('enviarReceita', {
        styles: '<link rel="stylesheet" href="/css/enviarReceita.css">'
                +'<link rel="stylesheet" href="/css/multi-select-tag.css">',
        scripts: '<script src="/js/enviarReceita.js"></script>'
                +'<script src="/js/multi-select-tag.js"></script>'  
    })
});

app.get('/perfio', (req, res) => {
    res.render('perfio', {
        styles: '<link rel="stylesheet" href="/css/perfio.css">',
        scripts: '<script src="/js/perfio.js"></script>'
    })
});

app.get('/listarReceita', (req, res) => {
    res.render('listarReceita', {
        styles: '<link rel="stylesheet" href="/css/listarReceita.css">',
        scripts: '<script src="/js/listarReceita.js"></script>' 
    })
});

app.get('/receitaCompleta', (req, res) => {
    res.render('receitaCompleta', {
        styles: '<link rel="stylesheet" href="/css/receitaCompleta.css">',
        scripts: '<script src="/js/receitaCompleta.js"></script>'
    })
});

app.listen(port, () => {
    console.log(`Esta aplicação está escutando a porta ${port}`)
})