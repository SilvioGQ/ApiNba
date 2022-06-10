// const axios = require('axios');
// const requestConfig = {
//     headers: {
//         "x-rapidapi-key": '7499792cf9mshb0c8bcaaec447b6p130fa6jsn6f861d911f1a',
//         "x-rapidapi-host": 'api-nba-v1.p.rapidapi.com'
//     }
//   }
// const buscarNaAPI = async () => {
//     //MONTAR A URL DE CONSULTA
//     const URL = `https://api-nba-v1.p.rapidapi.com/seasons/`
    
//     //CHAMADA HTTP
//     try {
//         const resposta = await axios.get(URL,requestConfig);
//         console.log(resposta)
//         //RETORNAR
//         return resposta.data;
//     } catch (error) {
//         console.log({ error });
//         return null;
//     }
// }

// module.exports = { buscarNaAPI };