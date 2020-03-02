import React,{Component} from 'react'
import Card from '../CatCard/card'
import '../css/cat_sec.css'

class Clothing extends Component{



    render(){
        return(
            <div>
                <div className = 'category_sec_heading'>CLOTHING</div>
                {/* <Divider/> */}
                <div className = 'cat_card_header'>
                    <Card cat = 'clothing'/>
                </div>
            </div>
        )
    }
}




export default Clothing