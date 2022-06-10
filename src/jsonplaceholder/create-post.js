const axios = require('axios');

const createPostNaAPI = async ({ title, text }) => {
    //MONTAR A URL DE CONSULTA
    const URL = `https://jsonplaceholder.typicode.com/posts/`
    
    //CHAMADA HTTP
    try {
        const resposta = await axios.post(URL, {
            title: title,
            body: text,
            userId: 1,
        });

        //RETORNAR
        return resposta.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { createPostNaAPI };