require('dotenv').config();
const { URL_BASE, KEY} = process.env;
const axios = require("axios");
const { Character }=require("../DB_connection")


const getApiData = async() => {
    try {
        let id=1;
        let characters = []
        
        // me traigo los primeros 100 personajes de la API
        while(id<6){
            let apiData = await axios.get(`https://rickandmortyapi.com/api/character?page=${id}`);
            characters.push(apiData);
            id++;
        }

        characters = (await Promise.all(characters)).map(res=>res.data.results.map(char=>{
            return({
                id:char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender:char.gender,
                origin: char.origin.name,
                image: char.image
            })
        }))
        let allCharacters = [];
        characters.map(char=>{allCharacters = allCharacters.concat(char)})

        return allCharacters;

    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async () =>{
    try {
        const allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters);
        //bulk create nos permite pasarle un array de objetos y los crea todos juntos en la DB
        return allCharacters
    } catch (error) {
        return {error: error.message}
    }
}

module.exports={
    saveApiData
};