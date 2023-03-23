const axios = require("axios")

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "f34d1ed75dfb.cff0824d244e69fdada3";
// axios(`${URL_BASE}/character/${id}?key=${KEY}`)

const successHandler = (response,res) => {
    const {id, name, image, gender, species} = response.data;
    res.writeHead(200,{"Content-type":"application/json"})
    .end(JSON.stringify({id, name, image, gender, species}))
}

const errorHandler = (error, res, ID) => {
    res.writeHead(500,{"Content-type":"text/plain"})
    res.end(`${error.message}. El personaje con id: ${ID} no fue encontrado`)
}



const getCharById = (res, ID) => {
    axios(`${URL_BASE}/character/${ID}?key=${KEY}`)
        .then((response)=> successHandler(response, res, ID))
        .catch(error=> errorHandler(error, res))    
}

module.exports = getCharById;