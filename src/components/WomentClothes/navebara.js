import React, { Component } from 'react';
import {list} from '../catList'




 export default class NaveBar extends Component {
constructor(props){
    super(props);
    props.checkCat('mobiles')
    
}



state = {
    cat:'mobile'
}

changeCat=(val)=>{
    this.props.checkCat(val)
    this.setState({cat:val})

}


render(){

    let caList = list;
    const lists = caList.map((el,i)=>{

        return <li><a onClick = {()=>this.changeCat(el.toLowerCase())}>{el}</a></li>
    })

    return(
        <div>
            <div className="listItemHeadig"><h3>WOMEN'S CLOTHING</h3></div>
<ul className="ListItem">
    {lists}
    {/* <li><a onClick = {()=>this.changeCat('mobile')} >Mobiles</a></li>
    <li><a onClick = {()=>this.changeCat('computing')} >Computing</a></li>
    <li><a onClick = {()=>this.changeCat('Electronics')} >Electronics</a></li>
    <li><a onClick = {()=>this.changeCat('Clothing')} >Clothing</a></li>
    <li><a onClick = {()=>this.changeCat('Furniture')}  >Furniture</a></li>
    <li><a onClick = {()=>this.changeCat('Health_And_Fitness')}  >Health & Fitness</a></li>
    <li><a onClick = {()=>this.changeCat('Home_And_Living')}  >Home &Living</a></li>
    <li><a onClick = {()=>this.changeCat('Fashion')}  >Fashion</a></li> */}
</ul>


        </div>
    )
}

}