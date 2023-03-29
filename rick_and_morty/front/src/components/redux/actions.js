import { ADD_FAVORITE, DELETE_FAVORITE,SHOW_FAVORITES } from "./action-types"
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

export const deleteFavorite =(id)=>{
    // return function(dispatch){
    //     axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
    //     .then(response => {
    //         return dispatch({type: DELETE_FAVORITE, payload: response.data})
    //     })
    // }
    return {type: DELETE_FAVORITE, payload: id}
}

export const showfavorites =()=>{
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/rickandmorty/fav")
            return dispatch({type: SHOW_FAVORITES, payload: response.data })
        } catch (error) {
            console.log(error);
        }
    }
}

