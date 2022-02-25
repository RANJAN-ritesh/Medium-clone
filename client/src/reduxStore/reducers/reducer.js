import { INC,DEC } from "../actionType";

const init = {
    count:0
}
export const reducer = (store=init,{type,payload}) => {
   switch(type){
       case INC:
           return {...store,count:store.count+payload};
       case DEC:
           return {...store,count:store.count-payload};
       default:
           return store
   }
}