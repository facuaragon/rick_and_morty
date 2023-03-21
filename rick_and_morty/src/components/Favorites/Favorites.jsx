import { useSelector } from "react-redux"; 
import Card from "../Card/Card";


const Favorites = () => { 
    const favorites = useSelector(state=>state.myFavorites)

    return (
        <div>
            {
                favorites.map(({id, name, species, gender, image})=>{
                    return (
                        <Card 
                            key = {id}
                            name = {name} // {character.name}
                            species = {species} // {character.species}
                            gender = {gender} // {character.gender}
                            image = {image} // {character.image}
                            id={id}
                                   
                        />
                    )
                })
            }
            
        </div>
    )
}

export default Favorites;