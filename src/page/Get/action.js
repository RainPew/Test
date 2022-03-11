import * as ActionType from "./constants";
import axios from "axios";

export const fetchGetHome = () => {
  return (dispatch) => {
    dispatch(actGETRequest());
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
      method: "GET",
      headers: {
        TokenCyberSoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E`,
      },
    })
      .then((res) => {
        dispatch(actGETSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actGETFail(err));
      });
  };
};


const actGETRequest = () => {
    return {
      type: ActionType.GET_HOME_REQUEST,
    };
  };
  const actGETSuccess = (data) => {
    return {
      type: ActionType.GET_HOME_SUCCESS,
      payload: data,
    };
  };
  const actGETFail = (err) => {
    return {
      type: ActionType.GET_HOME_FAIL,
      payload: err,
    };
  };
  