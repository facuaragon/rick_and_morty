const {Router}=require("express");
const {getCharById}= require("../controllers/getCharById")
const {getCharDetail} = require("../controllers/getCharDetail")
const {postFav, getFavs, deleteFav} = require("../controllers/favs")



const router = Router();
router.get("/rickandmorty/onsearch/:id", getCharById);
router.get("/rickandmorty/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", postFav);
router.get("/rickandmorty/fav", getFavs);
router.delete("/rickandmorty/fav/:id", deleteFav);

module.exports = router;