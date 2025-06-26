import {
  logInFail,
  logInRequest,
  logInSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
} from "@/slices/authSlice";
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const config = {
      headers: {
        /* "Content-type": "multipart/form-data", */
        "Content-Type": "multipart/form-data", // ✅ Important!
      },
    };
    const { data } = await axios.post(`/user/register/`, userData, config);
    //console.log("user data is ******** ", data, " %%%%%%%%%%");
    dispatch(registerSuccess(data));
  } catch (error) {
    console.log("you got a register user error 1", error);
    dispatch(registerFail(error.response.data));
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch(logInRequest());
    const config = {
      headers: {
        /* "Content-type": "multipart/form-data", */
        "Content-Type": "multipart/form-data", // ✅ Important!
      },
    };
    const { data } = await axios.post(`/user/login/`, userData, config);
    dispatch(logInSuccess(data));
  } catch (error) {
    dispatch(logInFail(error.response.data));
  }
};
