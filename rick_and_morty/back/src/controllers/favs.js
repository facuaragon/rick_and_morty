let favs = require("../utils/favs");

const postFav = (req, res) => {
    favs = favs.filter((fav)=> fav.id != req.body.id)
    favs.push(req.body)
    res.status(201).json({status: "ok"});
}

const getFavs = (req, res) => {
    res.status(200).json(favs);
}

const deleteFav = (req, res)=>{
    const {id} = req.params;
    favs = favs.filter((fav)=> fav.id != id)
    res.status(200).json(favs);
}

module.exports = {
    postFav,
    getFavs,
    deleteFav
}