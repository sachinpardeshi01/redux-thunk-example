import {GET_ALBUMS, GET_PHOTOS} from "../actions/types";

let initialState = {

}
const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ALBUMS : 
            return {
                ...state,
                albumJSON: action.data
            }

        case GET_PHOTOS : 
            return {
                ...state,
                photosJSON: action.data
            }    
        default :
        return state;
    }
}

export default rootReducer;