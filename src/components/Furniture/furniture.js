import React,{Component} from 'react'
import Card from '../CatCard/card'
import '../css/cat_sec.css'

class Furniture extends Component{



    render(){
        return(
            <div>
                <div className = 'category_sec_heading' >FURNITURE</div>
                {/* <Divider/> */}
                <div className = 'cat_card_header'>
                    <Card cat = 'furniture'/>
                </div>
            </div>
        )
    }
}




export default Furniture