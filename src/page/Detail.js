import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchGetHome } from "./Get/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Detail(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.createHomeReducer.loading);
  const error = useSelector((state) => {
    return state.createHomeReducer.err;
  });
  const success = useSelector((state) => {
    return state.createHomeReducer.data;
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target[0]?.value && event.target[1]?.value) {
      dispatch(
        fetchGetHome(
          {
            taiKhoan: event.target[0].value,
            matKhau: event.target[1].value,
            email: event.target[2].value,
            soDt: event.target[3].value,
            maNhom: event.target[4].value,
            maLoaiNguoiDung: event.target[5].value,
            hoTen: event.target[5].value,
          },
          navigate
        )
      );
    }
  };
  return (
    <div
      className="container d-flex"
      style={{ minHeight: "100vh" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <h1 className="text-center mb-5">Thêm Người Dùng</h1>
          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Tên
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
              <span className="input-group-text" id="basic-addon1">
                Mật Khẩu
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
          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Số Điện Thoại
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Số Dt"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Mã Nhóm
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Mã Nhóm"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Mã Loai người dùng
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Mã Loai người dùng"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Họ và tên
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Họ và tên"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        {!loading && <button className="btn btn-success">Thêm</button>}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error?.response?.data?.content}
          </div>
        )}
        {success && (
          <div className="alert alert-success" role="alert">
            {success?.message}
          </div>
        )}
        <ClipLoader color={"red"} loading={loading} size={80} />
      </form>
    </div>
  );
}
