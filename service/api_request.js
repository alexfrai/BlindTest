const axios = require('axios');
const { get } = require('mongoose');
let qSearch = "";


module.exports= {

  async getInfoWithApi(qSearch){
  
      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: `${qSearch}`},
        headers: {
          'X-RapidAPI-Key': '8affa3d5a5msh56c3f59f754092ep1d7ca2jsn22cbe1ce69e7',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
  
      const response = await axios.request(options).then((res)=> {
        console.log(res.data)
        return response.data;
    })
  }
}
  //getInfoWithApi('eminem')
