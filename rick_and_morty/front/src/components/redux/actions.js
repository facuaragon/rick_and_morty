import { ADD_FAVORITE, DELETE_FAVORITE,SHOW_FAVORITES, GET_CHARACTER_DETAIL, CLEAN_DETAIL } from "./action-types"
import axios from "axios"

// export const addFavorite =(character)=>{

//     // return function(dispatch){
//     //     axios
//     //     .post("http://localhost:3001/rickandmorty/fav", character)
//     //     .then(response => {
//     //         return dispatch({type: ADD_FAVORITE, payload: response.data}) //[{1}, {2}]
//     //     })
//     // }
//     return {type: ADD_FAVORITE, payload: character}
// }

// export const deleteFavorite =(id)=>{
//     // return function(dispatch){
//     //     axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
//     //     .then(response => {
//     //         return dispatch({type: DELETE_FAVORITE, payload: response.data})
//     //     })
//     // }
//     return {type: DELETE_FAVORITE, payload: id}
// }

export const getCharacterDetail = (id) =>{
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/rickandmorty/detail/${id}`);
        dispatch({type: GET_CHARACTER_DETAIL, payload: response.data})
    }
}

export const cleanDetail = () =>{
    return {type: CLEAN_DETAIL};
}

export const showfavorites =()=>{
    return async function(dispatch){
            const response = await axios.get("http://localhost:3001/rickandmorty/fav")
            dispatch({type: SHOW_FAVORITES, payload: response.data })
    }
}

