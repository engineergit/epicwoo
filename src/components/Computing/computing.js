import React,{Component} from 'react'
import Card from '../CatCard/card'
import '../css/cat_sec.css'

class Computing extends Component{



    render(){
        return(
            <div>
                <div className = 'category_sec_heading'>COMPUTERS</div>
                {/* <Divider/> */}
                <div className = 'cat_card_header'>
                    <Card cat = 'computing'/>
                </div>
            </div>
        )
    }
}



export default Computing;
