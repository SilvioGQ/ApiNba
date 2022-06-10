const axios = require('axios');

const buscaPostNaAPI = async (id) => {
    //MONTAR A URL DE CONSULTA
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`
    
    //CHAMADA HTTP
    try {
        const resposta = await axios.get(URL);

        //RETORNAR
        return resposta.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { buscaPostNaAPI };