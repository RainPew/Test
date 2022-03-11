import * as ActionType from "./constants";
import axios from "axios";

export const fetchLoginHome = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
      headers: {
        TokenCyberSoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E`,
      },
    })
      .then((res) => {
        localStorage.setItem("admin", JSON.stringify(res.data));
        history("/");
        dispatch(actLoginSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actLoginFail(err));
      });
  };
};
const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_HOME_REQUEST,
  };
};
const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_HOME_SUCCESS,
    payload: data,
  };
};
const actLoginFail = (err) => {
  return {
    type: ActionType.LOGIN_HOME_FAIL,
    payload: err,
  };
};
