const mongoose = require("mongoose");
// const localMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  date:{
    type: String,
    default: new Date()
    
  },
  category:{
    type:String,
    required:true
  },
  brand:{
      type:String,
      default:''
  },
  latest:{
      type:Boolean,
      default:false

  },
  top_rated:{
    type:Boolean,
    default:false
  },
  best_seller:{
    type:Boolean,
    default:false
  },
  sales:{
      type:Number,
      default:0,
  },
  price:{
    type:String,
    required:true
  },
  offer:{
    type:String,
    default:'n/a'
  },
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }

});

// userSchema.plugin(localMongoose);

const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;