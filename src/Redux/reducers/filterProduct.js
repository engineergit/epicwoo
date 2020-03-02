import {GET_VAL} from '../actionTypes';


const filterProductReducer =(state = {val : ''},action) =>{
    if(action.type == GET_VAL){
        return {val:action.val}
    }
    return state
}   


export default filterProductReducer;


