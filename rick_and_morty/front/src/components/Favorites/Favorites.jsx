import { useSelector } from "react-redux"; 
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const Favorites = () => { 
    //const favorites = useSelector(state=>state.myFavorites)
    //const favorites = 
    const [favorites, setFavorites] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/rickandmorty/fav`).then((response)=>setFavorites(response.data));
      },[]);

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