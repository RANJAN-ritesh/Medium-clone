import { INDIVIDUAL_PAGE, LIKE, SAVE_ITEMS, SEARCH_TAG } from "./actionTypes"

export const Like = (payload) =>{
    return{
        type:LIKE,
        payload
    }
}

export const IndividualPage = (payload)=>{
    return{
        type:INDIVIDUAL_PAGE,
        payload
    }
}

export const Saveitems = (payload)=>{
    return{
        type:SAVE_ITEMS,
        payload
    }
}

export const Searchtag = (payload)=>{
    return{
        type:SEARCH_TAG,
        payload
    }
}