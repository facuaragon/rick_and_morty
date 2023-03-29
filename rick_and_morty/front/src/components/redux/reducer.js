import { ADD_FAVORITE, DELETE_FAVORITE, SHOW_FAVORITES } from "./action-types";
const initialState = {
    myFavorites: [],
};

const rootReducer = (state=initialState, action) =>{  // action = {type, action}

    switch (action.type){

        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char)=> char.id!==action.payload
                    ),
            }

        case SHOW_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload
            }

        default:
            return {...state}
    }

}

export default rootReducer;