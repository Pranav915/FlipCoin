import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const mainActions = {
  SET_PRODUCT_LIST: "MAIN.SET_PRODUCT_LIST",

};

export const setProductList = (productList) => {
  return {
    type: mainActions.SET_PRODUCT_LIST,
    productList
  }
}

export const getMainActions = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    addToCart:(data) => dispatch(addToCart(data))
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    const response = await api.getAllProducts();
    if (response.error) {
      console.log("response", response);
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { productList } = response?.data;
      console.log(productList);
      dispatch(setProductList([]));
    }
  };
};

export const addToCart = (data) => {
  return async (dispatch) => {
    const response = await api.addToCart(data);
    if (response.error) {
      console.log("response", response);
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Successfully added to cart."));
    }
  };
};