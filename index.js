//Inclusão de bibliotecas
const express = require('express');
const app = express();

//Configurações
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'));

//Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/quem-somos', (req, res) => {
    res.render('quem-somos');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

//Listen
app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000');
});