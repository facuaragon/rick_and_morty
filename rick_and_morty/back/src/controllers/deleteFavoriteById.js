const {Favorite} = require("../DB_connection")

const deleteFavoriteById = async (id)=>{
    try {
        const favDeleted = await Favorite.findByPk(id);
        if(favDeleted){
            await favDeleted.destroy();
            return "Favorito eliminado correctamente"
        }
        else{
            throw new Error("No existe personaje Favorito con ese ID")
        }
        

    } catch (error) {
        return {error:error.message}
    }
}

module.exports= deleteFavoriteById