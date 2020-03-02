import { get_all } from "../actions/product";
import history from "../../history/history";

const Product = {
  SaveProduct: data => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("file", data.img);
    formData.append("brand", data.brand);
    formData.append("category", data.category);
    formData.append("type", data.type);
    formData.append("price", data.price);

    fetch("/products/new", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: formData
    })
      .then(resp => {
        return resp.json();
      })
      .then(res => {
        if (res.success) {
          console.log("Yes");
        } else {
          alert(res.err);
        }
      });
  },
  GetAll: data => dispatch => {
    dispatch(get_all(data));
  }
};

export default Product;
