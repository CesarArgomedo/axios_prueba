const axios = require('axios');

const apiKey ='kggHJl86Ek6lIgPKxh0BkN095pJYH8Cw';

const giphyApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        api_key:apiKey
    }
})

giphyApi.get('/random')
.then((resp)=>{

    const {data} = resp.data;

    const {url} = data.images.original;

    const imagen = document.createElement('img')

    imagen.src = url;

    document.body.append(imagen);


})