const axios = require('axios')


const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "f34d1ed75dfb.cff0824d244e69fdada3";
// axios(`${URL_BASE}/character/${id}?key=${KEY}`)




const getCharDetail = async (req, res) => {
    const {id} = req.params;
    
    try {
        const response = await axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
        const character = {
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender,
            origin: response.data.origin?.name,
            status: response.data.status,
        }
        res.status(200).json(character)
    } catch (error) {
        res.status(500).json(error.message)
    }

    // axios(`${URL_BASE}/character/${id}?key=${KEY}`)
    // .then((response)=> {
    //     const character = {
    //         id: response.data.id,
    //         name: response.data.name,
    //         species: response.data.species,
    //         image: response.data.image,
    //         gender: response.data.gender,
    //         origin: response.data.origin?.name,
    //         status: response.data.status,
    //     }
    //     res.status(200).json(character)
    // }, error => res.status(500).json(error.message)) 
}

module.exports = { getCharDetail };



// const getCharDetail = (res, ID) => {
//     axios(`${URL_BASE}/character/${ID}?key=${KEY}`)
//         .then((response)=> response.data)
//         .then(data => {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 image: data.image,
//                 gender: data.gender,
//                 species: data.species,
//                 status: data.status,
//                 origin: data.origin?.name
//             }
//             res.writeHead(200,{"Content-type":"application/json"})
//             .end(JSON.stringify(character))
//         })
//         .catch(err=>res
//             .writeHead(500,{"Content-type":"text/plain"})
//             .end(`${err.message}. El personaje con id: ${ID} no fue encontrado`))    

// }


