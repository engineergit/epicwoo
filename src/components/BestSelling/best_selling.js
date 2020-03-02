import React,{Component} from 'react'
import Card from '../CatCard/card'
import {connect} from 'react-redux';
import '../css/cat_sec.css'


class BestSelling extends Component{



    render(){
        return(
            <div>
                <div className = 'category_sec_heading' >BEST SELLING</div>
                <div className = 'cat_card_header'>
                    <Card cat = 'best_selling'/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = store => ({
    Authentication: store.Authentication
  });


export default connect(mapStateToProps)(BestSelling)