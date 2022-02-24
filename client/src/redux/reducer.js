import { INDIVIDUAL_PAGE, LIKE } from "./actionTypes";

const initstate = {
likes:[],
Individual_data:[]
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