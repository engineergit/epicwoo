import React,{Component} from 'react'
import Card from '../CatCard/card'
import '../css/cat_sec.css'

class Kitchen extends Component{



    render(){
        return(
            <div>
                <div className = 'category_sec_heading'>KITCHEN</div>
                {/* <Divider/> */}
                <div className = 'cat_card_header'>
                    <Card cat = 'kitchen'/>
                </div>
            </div>
        )
    }
}




export default Kitchen