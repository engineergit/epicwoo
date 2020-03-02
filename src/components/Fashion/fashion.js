import React,{Component} from 'react'
import Card from '../CatCard/card'
import '../css/cat_sec.css'

class Fashion extends Component{



    render(){
        return(
            <div>
            <div className = 'category_sec_heading' >FASHION</div>
            {/* <Divider/> */}
            <div className = 'cat_card_header'>
                <Card cat = 'fashion'/>
            </div>
        </div>
        )
    }
}




export default Fashion