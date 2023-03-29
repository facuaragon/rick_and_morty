import { useSelector, useDispatch } from "react-redux"; 
import { useEffect } from "react";
import Card from "../Card/Card";
import { showfavorites } from "../redux/actions";
import styled from "styled-components";

const CardsContainer = styled.div`
   padding-top: 20px;
   width: 100%;
   background-size: cover;
   padding-bottom: 800px;
`

const Favorites = () => { 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(showfavorites())
    },[])
    
    const favorites = useSelector(state=>state.myFavorites)
    return (
        <CardsContainer>
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
            
        </CardsContainer>
    )
}

export default Favorites;