const {Router}=require("express");
const {getCharById}= require("../controllers/getCharById")
const {getCharDetail} = require("../controllers/getCharDetail")
const postFav = require("../controllers/postFav")
const deleteFavoritebyId = require("../controllers/deleteFavoriteById")
const login = require("../controllers/login")
const postUser = require("../controllers/postUser")
const getAllChars = require("../controllers/getAllChars")
const getAllFavorites=require("../controllers/getAllFavorites")





const router = Router();

router.get("/rickandmorty/allCharacters", async(req,res)=>{
    try {
        const allCharacters = await getAllChars();
        res.status(200).json(allCharacters)
    } catch (error) {
        res.status(404).send("Hubo un problema");
    }
})


router.get("/rickandmorty/onsearch/:id", getCharById);
router.get("/rickandmorty/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", async (req, res)=>{
    try {
        const characterFav = await postFav(req.body)
        if(characterFav.error) throw new Error(characterFav.error)
        res.status(200).send(characterFav)
        
    } catch (error) {
        return res.status(404).send(error.message)
    }
});


router.get("/rickandmorty/fav", async (req, res)=>{
    try {
        const allFavs = await getAllFavorites();
        if(allFavs.error) throw new Error(allFavs.error)
        return res.status(200).json(allFavs)
    } catch (error) {
        return res.status(404).send(error.message)
    }
});


router.delete("/rickandmorty/fav/:id", async (req,res)=>{
    try {
        const {id}=req.params;
        const deleteFavorite = await deleteFavoritebyId(parseInt(id))
        if(deleteFavorite.error) throw new Error(deleteFavorite.error)
        return res.status(200).send(deleteFavorite)
    } catch (error) {
        return res.status(404).send(error.message)
    }
});

router.get("/rickandmorty/login", login )
router.post("/rickandmorty/login", postUser)

// router.post("/rickandmorty/fav", (req, res) => {
//     favs.push(req.body);
//     res.status(200).json({ status: "Agregado OK" });
//   });
  
//   router.get("/rickandmorty/fav", (req, res) => {
//     res.status(200).json(favs);
//   });
  
//   router.delete("/rickandmorty/fav/:id", (req, res) => {
//     const { id } = req.params;
//     favs = favs.filter((char) => char.id != id);
//     res.status(200).json({ status: "Eliminado OK" });
//   });

module.exports = router;