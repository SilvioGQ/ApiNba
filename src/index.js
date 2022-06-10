const express = require("express");
const axios = require('axios');
const { buscaPostNaAPI } = require("./jsonplaceholder/detail-post");
const { createPostNaAPI } = require("./jsonplaceholder/create-post");
// const { buscarNaAPI } = require("./NBATeams/teams");
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.get('/', async (req, res) => {
        return res.render('home');
})

app.post('/detalhar', async (req, res) => {
    const { postId } = req.body;
    const resultado = await buscaPostNaAPI(postId);
    if (resultado) {
        return res.send({ resultado });
    }
    return res.send("ooops, id nao encontrado");
})

app.post('/criar', async (req, res) => {
    const { title, text } = req.body;
    const resultado = await createPostNaAPI({ title, text });
    if (resultado) {
        return res.send({ resultado });
    }
    return res.send("ooops,  nao consegui cadastrar ");
})

app.listen(3000, () => console.log("Escutando na porta 3000"));