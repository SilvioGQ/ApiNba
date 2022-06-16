const axios = require('axios');

const buscaPostNaAPI = async (id) => {
    //MONTAR A URL DE CONSULTA
    const getTeams = 'https://www.balldontlie.io/api/v1/teams';
    const specific = `https://www.balldontlie.io/api/v1/teams/${id}`
    let team = [];    

    //CHAMADA HTTP
    try {
        const resposta = await axios.get(getTeams);
        if(resposta){
            for(let i = 0; i < resposta.data.data.length;i++){
                if(resposta.data.data[i].full_name.toLowerCase().match(id.toLowerCase())){
                    team.push(resposta.data.data[i])
                }
            }
        }
        console.log(team)
        //RETORNAR
        return team;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { buscaPostNaAPI };