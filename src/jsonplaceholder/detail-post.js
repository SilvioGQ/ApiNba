const axios = require('axios');

const buscaPostNaAPI = async (id) => {
    //MONTAR A URL DE CONSULTA
    const getTeams = 'https://www.balldontlie.io/api/v1/teams';
    const specific = `https://www.balldontlie.io/api/v1/teams/${id}`
    let team;    
    //CHAMADA HTTP
    try {
        const resposta = await axios.get(getTeams);
        if(resposta){
            for(let i = 1; i < resposta.data.data.length;i++){
                if(resposta.data.data[i].id === id){
                    console.log('opa')
                }
            }
        }
        //RETORNAR
        return resposta.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { buscaPostNaAPI };