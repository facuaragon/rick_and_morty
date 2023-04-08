const {Favorite} = require("../DB_connection")

const postFav = async (character)=>{
    try {
        const {name, origin, status, image, species, gender, id}=character;
        console.log(name, origin, status, image, species, gender, id);
        if(!name || !origin || !status || !image || !species ||!gender ||!id) throw new Error("Faltan Datos obligatorios")
        else{
            const newFav ={
                name,
                status,
                species,
                gender,
                origin,
                image,
                id
            }
            await Favorite.create(newFav);

            const allFavs = await Favorite.findAll()
            return allFavs;
        }
    } catch (error) {
        return {error: error.message};
    }
}


module.exports= postFav