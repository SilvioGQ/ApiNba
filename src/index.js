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
    let posts=[];
    const getTeams = 'https://www.balldontlie.io/api/v1/teams';
    for(let i=1;i<=5;i++){
        const URL = `https://jsonplaceholder.typicode.com/posts/${i}`
        const resposta = await axios.get(URL);
        posts.push(resposta.data);
    }
    const teamsData = await axios.get(getTeams);
    if(teamsData){
        teams = teamsData.data
        for(let i=0;i<teams.data.length;i++){
        teams.data[i].image=`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${teams.data[i].abbreviation.toLowerCase()}.png`
        }
    }
    console.log(teams.data)
    try{
        return res.render('home', {posts, teams:teams.data});
    }catch (err) {
        res.json(err)
    }
})

app.post('/detalhar', async (req, res) => {
    const { postId } = req.body;
    let teamsData = await buscaPostNaAPI(postId);
    if(teamsData && teamsData.length > 0){
        for(let i=0;i<teamsData.length;i++){
            // console.log(teamsData[i])
        teamsData[i].image=`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${teamsData[i].abbreviation.toLowerCase()}.png`
        }
    }
    try{
        return res.render('search', {teams:teamsData, team:postId});
    }catch (err) {
        res.json(err)
    }
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