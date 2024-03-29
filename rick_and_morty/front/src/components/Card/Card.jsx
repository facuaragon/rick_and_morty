import styled from "styled-components";
//import style from "./Card.Mdoule.css"
import React from "react";
import {Link} from "react-router-dom"
import { connect, useDispatch } from "react-redux";
import { showfavorites } from "../redux/actions";
import { useState, useEffect } from "react";
import axios from "axios";

const Div = styled.div`
   display: inline-block;
   position: relative;
   text-align: center;
   flex-direction: column;
   justify-content: space-around;
   background-color: white;
   width: 300px;
   margin: 0 50px 50px 50px;
   box-shadow: 2px 2px 6px 6px rgba(184,170,170,0.56);
   border-radius: 5px;

`
const CloseButton = styled.button`
   margin: 5px 5px 5px auto;
   text-align: center;
   display: flex;
   justify-content: center;
   width: 40px;
   border-radius: 5px;
   background-color: red;
   color: white;
   font-weight: bold;
   font-size: larger;
`
const Subtitle1 = styled.h2`
   color: white;
   bottom: 13%;
   left: 10px;
   position: absolute;
   font-weight: bold;
   font-size: x-large;
   background-color: RGBA(131,122,122,0.71);
   margin: auto;
   padding: 0px 5px 5px 5px;
`
const Subtitle2 = styled.h2`
   display: inline; 
   font-weight: 300;
   justify-content: space-around;
   margin: auto 20px;
`
const Fav = styled.button`
   margin: 5px 5px 5px auto;
   text-align: center;
   display: flex;
   justify-content: center;
   width: 40px;
   border-radius: 5px;
   background-color: red;
   color: white;
   font-weight: bold;
   font-size: larger;
`


function Card({name, species, gender, origin, status, image, onClose, id, myFavorites}) { // => destructuring
   
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();

   const addFavorite = (character)=>{
      axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res)=>console.log("agregado con exito"))
   }

   const deleteFavorite = async (id)=>{
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      dispatch(showfavorites())
      console.log("Eliminado con exito")
   }

   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(id);
      }
      else{
         setIsFav(true);
         addFavorite({name, species, gender, origin, image, status, id});
      }
   }
   
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   
   return (
      <Div >
         {isFav ? (<Fav onClick={handleFavorite}>❤️</Fav>) : (<Fav onClick={handleFavorite}>🤍</Fav>)}
         <CloseButton onClick={onClose}>X</CloseButton>
         <Link to={`/detail/${id}`}>
            <Subtitle1>{name}</Subtitle1>
         </Link>
         <img  src={image} alt={name} />
         <Subtitle2>{gender}</Subtitle2>
         <Subtitle2>{species}</Subtitle2>
      </Div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      // addFavorite: (character)=>{dispatch(addFavorite(character))},
      //deleteFavorite: (id)=>{dispatch(deleteFavorite(id))}
   }
}
const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites,
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);