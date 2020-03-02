import React  from "react";
import {Switch,Route} from 'react-router-dom';
import BestSelling from "../BestSelling/best_selling";
import Mobiles from "../Mobiles/mobiles";
import Computing from "../Computing/computing";
import Fashion from "../Fashion/fashion";
import Furniture from "../Furniture/furniture";
import Electronics from "../Electronics/electronics";
import Clothing from "../Clothing/clothing";
import Health from "../Health/health";
import Living from "../Living/living";
import Kitchen from "../Kitchen/kitchen";

const CatRoutes =()=>{
    return (
      <div>
        <Route path="/best_selling_products" component={BestSelling} />
        <Route path="/mobiles_products" component={Mobiles} />
        <Route path="/computing_products" component={Computing} />
        <Route path="/electronics_products" component={Electronics} />
        <Route path="/furniture_products" component={Furniture} />
        <Route path="/clothing_products" component={Clothing} />
        <Route path="/health & fitness_products" component={Health} />
        <Route path="/home & living_products" component={Living} />
        <Route path="/fashion_products" component={Fashion} />
        <Route path="/kitchen_products" component={Kitchen} />
      </div>
    );

}

export default CatRoutes;
