import React,{Component} from 'react'
import Card from '../CatCard/card'
import '../css/cat_sec.css'



class Health extends Component{



    render(){
        return(
            <div>
                <div className = 'category_sec_heading' >HEALTH & FITNESS</div>
                {/* <Divider/> */}
                <div className = 'cat_card_header'>
                    <Card cat = 'health & fitness'/>
                </div>
            </div>
        )
    }
}




export default Health