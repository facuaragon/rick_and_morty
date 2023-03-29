import { useSelector, useDispatch } from "react-redux"; 
import { useEffect } from "react";
import Card from "../Card/Card";
import { showfavorites } from "../redux/actions";


const Favorites = () => { 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(showfavorites())
    },[])
    
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