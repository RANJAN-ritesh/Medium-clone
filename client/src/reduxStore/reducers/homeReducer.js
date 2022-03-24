import { SAVE_ITEMS, SEARCH_TAG,SAVE_ITEMS_TRENDING } from "../actionType";
import { Searchtag } from "../action";
import { LIKE,INDIVIDUAL_PAGE } from "../actionType";

const initstate = {
    allFeeds:[],
    allTrendingFeeds:[],
    likes:15,
    searchKeyword:null,
    Individual_data:[]
    // Searchtag:[],
    };
    
    export const homeReducer = (state = initstate , {type,payload})=>{
        switch(type){
            case LIKE:{
                return{
                    ...state,
                    likes:state.likes+payload
                }
            }
            case INDIVIDUAL_PAGE:{
                return{
                    ...state,
                    Individual_data:payload
                }
            }
            
            case SAVE_ITEMS:{
                return{
                    ...state,
                    allFeeds:payload
                }
            }
            case SAVE_ITEMS_TRENDING:{
                return{
                    ...state,
                    allTrendingFeeds:payload
                }
            }
            case SEARCH_TAG:{
                return{
                    ...state,
                    searchKeyword:payload
                }
            }
            
            default:
                return state;
        }
    }