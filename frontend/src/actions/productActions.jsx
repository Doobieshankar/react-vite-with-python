import axios from "axios";
import {
  productsFail,
  productsRequest,
  productsSuccess,
} from "../slices/productSlices";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(productsRequest());
    const { data } = await axios.get("/api/products/");
    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsFail(error?.response?.data?.message));
    throw new Error(error?.response?.data?.message || "products fetch Failed");
  }
};
