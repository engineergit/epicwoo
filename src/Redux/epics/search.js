import {get_search_val} from '../actions/product';


const Search ={
    storeVal:val=>dispatch=>{
        dispatch(get_search_val(val))
    }
}


export default Search;