import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchLoginHome } from "./Login/action";
import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
} from "react-router-dom";
export default function Login(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loginHomeReducer.loading);
  const error = useSelector((state) => {
    return state.loginHomeReducer.err;
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target[0]?.value && event.target[1]?.value) {
      dispatch(
        fetchLoginHome(
          { taiKhoan: event.target[0].value, matKhau: event.target[1].value },
          navigate
        )
      );
    }
  };
  return (
    <div className="container formLogin d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <h1 className="text-center mb-5">Đăng nhập</h1>
          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Username
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text">
                .Password
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        {!loading && <button className="btn btn-success btnLogin">Đăng nhập</button>}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error?.response?.data?.content}
          </div>
        )}
        <ClipLoader color={"red"} loading={loading} size={80} />
      </form>
    </div>
  );
}
