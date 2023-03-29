
const express = require("express")

const morgan = require ("morgan")

const cors = require('cors')

const server = express()
const router = require("./index")
// const PORT = 3001;
const PORT = process.env.PORT || 3001

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use('/', router)



server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

// http.createServer((req,res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     let id= req.url.split('/').at(-1);
    
//     if(req.url.includes('onsearch')){
//         getCharById(res, id)
//     }
//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }
    
// }).listen(PORT, 'localhost')