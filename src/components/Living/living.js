import React,{Component} from 'react'
import Card from '../CatCard/card'
import '../css/cat_sec.css'

class Living extends Component{



    render(){
        return(
            <div>
                <div className = 'category_sec_heading'>HOME & LIVING</div>
                {/* <Divider/> */}
                <div className = 'cat_card_header'>
                    <Card cat = 'home & living'/>
                </div>
            </div>
        )
    }
}




export default Living