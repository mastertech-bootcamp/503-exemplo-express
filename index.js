//Inclusão de bibliotecas
const express = require('express');
const app = express();
const expressMongoDb = require('express-mongo-db');

//Configurações
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'));
app.use(expressMongoDb('mongodb://localhost/waltertech'));

//Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/quem-somos', (req, res) => {
    res.render('quem-somos');
});

app.get('/blog', (req, res) => {
    req.db.collection('blog').find({}).toArray((err, dados) => {
        res.render('blog', {posts: dados});
    });
});

app.get('/api', (req, res) => {
    req.db.collection('blog').find({}).toArray((err, dados) => {
        res.send(dados);
    });
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

//Listen
app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000');
});