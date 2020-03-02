import React,{Component} from 'react'
import Card from '../CatCard/card'
import '../css/cat_sec.css'

class Electronics extends Component{



    render(){
        return(
            <div>
                <div className = 'category_sec_heading'>ELECTRONICS</div>
                {/* <Divider/> */}
                <div className = 'cat_card_header'>
                    <Card cat = 'electronics'/>
                </div>
            </div>
        )
    }
}



export default Electronics;
