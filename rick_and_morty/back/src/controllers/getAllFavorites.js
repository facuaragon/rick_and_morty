const {Favorite} = require('../DB_connection')

const getAllFavorites = async ()=>{
    try {
        const allFavorites = await Favorite.findAll()
        if(!allFavorites) throw new Error("No existen personajes favoritos")
        return allFavorites
    } catch (error) {
        return {error: error.message}
    }
}

module.exports= getAllFavorites