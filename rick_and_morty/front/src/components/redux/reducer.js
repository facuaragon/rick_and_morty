import { ADD_FAVORITE, DELETE_FAVORITE, SHOW_FAVORITES, CLEAN_DETAIL, GET_CHARACTER_DETAIL } from "./action-types";
const initialState = {
    myFavorites: [],
    characterDetail: {}
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
        
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {}
            }

        default:
            return {...state}
    }

}

export default rootReducer;