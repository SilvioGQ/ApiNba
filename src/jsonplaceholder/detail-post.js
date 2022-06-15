const axios = require('axios');

const buscaPostNaAPI = async (id) => {
    //MONTAR A URL DE CONSULTA
    const getTeams = 'https://www.balldontlie.io/api/v1/teams';
    const specific = `https://www.balldontlie.io/api/v1/teams/${id}`
    let team;    

    //CHAMADA HTTP
    try {
        const resposta = await axios.get(getTeams);
        console.log(resposta.data.data.length)
        if(resposta){
            for(let i = 0; i < resposta.data.data.length;i++){
                if(i === id){
                    console.log(resposta.data.data[i])
                    team=resposta.data.data[i]
                }
            }
        }
        //RETORNAR
        return resposta.data.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { buscaPostNaAPI };