import { INDIVIDUAL_PAGE, LIKE, SAVE_ITEMS, SEARCH_TAG } from "./actionTypes";

const initstate = {
allelements:[],
likes:[],
Individual_data:[],
Search_tag:[]
};

export const reducer = (state = initstate , {type,payload})=>{
    switch(type){
        case LIKE:{
            return{
                ...state,
                LIKES:[...state.likes,payload]
            }
        }
        case INDIVIDUAL_PAGE:{
            return{
                ...state,
                Individual_data:[payload]
            }
        }
        
        default:
            return state;
    }
}