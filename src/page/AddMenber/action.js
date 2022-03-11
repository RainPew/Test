import * as ActionType from "./constants";
import axios from "axios";

export const fetchCreateHome = (user, history) => {
  return (dispatch) => {
    dispatch(actCreateRequest());
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        TokenCyberSoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E`,
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('admin')).content.accessToken}`
      },
    })
      .then((res) => {
        dispatch(actCreateSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actCreateFail(err));
      });
  };
};
const actCreateRequest = () => {
  return {
    type: ActionType.CREATE_HOME_REQUEST,
  };
};
const actCreateSuccess = (data) => {
  return {
    type: ActionType.CREATE_HOME_SUCCESS,
    payload: data,
  };
};
const actCreateFail = (err) => {
  return {
    type: ActionType.CREATE_HOME_FAIL,
    payload: err,
  };
};
