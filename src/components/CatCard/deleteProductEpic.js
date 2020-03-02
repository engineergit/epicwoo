import { baseUrl } from "../../shared";
import { deleteProduct as delProductAction } from "../../Redux/actions/product";
export const deleteProduct = productId => (dispatch) => {
  fetch(baseUrl + "products/" + productId, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      const err = new Error(res.status + " : " + res.statusText);
      throw err;
    })
    .then(res => {
      dispatch(delProductAction(res.deletedItem));
    })
    .catch(err => alert(err.message));
};
