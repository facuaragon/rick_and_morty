const http = require('http');
const characters = require('../utils/data.js')

const PORT = 3001;


http.createServer((req,res) =>{
    // console.log(`levantando server en puerto ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    // console.log(url);

    if(req.url.includes('rickandmorty/character')){
        const id = url.split('/').at(-1);

        // const characterFilter = characters.filter(char => char.id === Number(id)) // me devuelve un array comn el objeto del personaje dentro
        const characterFilter = characters.find(char => char.id === Number(id)) //  me devuelve directamente el contenido del array, es decir, en este caso, un objeto
        console.log(characterFilter);

        characterFilter 
        ? res.writeHead(200, {"Content-type":"application/json"}).end(JSON.stringify(characterFilter))
        : res.writeHead(400, {"Content-type":"application/json"}).end(JSON.stringify({error: "character not found"}))
        
        return;
    }
}).listen(PORT, 'localhost')