const axios = require("axios")
// const {KEY,URL_BASE} = process.env;

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "f34d1ed75dfb.cff0824d244e69fdada3";
// axios(`${URL_BASE}/character/${id}?key=${KEY}`)




const getCharById = async (req, res) => {
    const {id} = req.params;

    try {
        const response = await axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
        const character = {
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender
        }
        res.status(200).json(character)

    } catch (error) {
        res.status(500).json({error:error.message})
    }



    // axios(`${URL_BASE}/character/${id}?key=${KEY}`)
    // .then((response)=> {

    //     const { id, name, species, image, gender } = response.data;

    //     // const character = {
    //     //     id: response.data.id,
    //     //     name: response.data.name,
    //     //     species: response.data.species,
    //     //     image: response.data.image,
    //     //     gender: response.data.gender
    //     // }
    //     res.status(200).json({ id, name, species, image, gender } )
    // }, (error) => res.status(500).json({error:error.message})) 
    //.catch((error)=>{
    //    res.status(500).json({error:error.message})
    //});
}
module.exports = { getCharById };

// const successHandler = (response,res) => {
//     const {id, name, image, gender, species} = response.data;
//     res.writeHead(200,{"Content-type":"application/json"})
//     .end(JSON.stringify({id, name, image, gender, species}))
// }

// const errorHandler = (error, res, ID) => {
//     res.writeHead(500,{"Content-type":"text/plain"})
//     res.end(`${error.message}. El personaje con id: ${ID} no fue encontrado`)
// }