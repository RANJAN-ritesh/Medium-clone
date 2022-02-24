import { INDIVIDUAL_PAGE, LIKE } from "./actionTypes"

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
