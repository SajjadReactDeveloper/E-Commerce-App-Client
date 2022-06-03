import React from "react";
import "./login.css";
import MainNavbar from "../Home/Pages/Navbar/Navbar";
import Header from "../Home/Pages/Navbar/Pages/Header/Header";
import Navbar from "../Home/Pages/Navbar/Pages/Navbar/Navbar";
import Footer from "../Home/Pages/Footer/Footer";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  return (
    <div>
      <MainNavbar />
      <div className="mainD col-4 mx-auto p-4 pb-3 border mt-3 mb-3">
        <h4 className="text-center fw-600 pb-3">Login to your account</h4>
        <div className="mt-3">
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control "
              placeholder="Email"
              name="password"
              id="password"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control "
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <div className="row">
            <div className="col-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-6" style={{ textAlign: "right" }}>
              Forgot password?
            </div>
          </div>
          <div className="">
              <button className="btn w-100 mt-3 text-white" style={{backgroundColor: '#ff0000'}}>
                  Login
              </button>
          </div>
          <div className="text-center">
            <div class="separator mb-4 mt-5">
              <span className="px-3 opacity-60">Or Login With</span>
            </div>
          </div>
          <div className="iconn">
            <div className="itm fb">
              <FacebookRoundedIcon />
            </div>
            <div className="itm gog">
              <GoogleIcon />
            </div>
            <div className="itm tw">
              <TwitterIcon />
            </div>
          </div>
          <div className="text-center mt-5">
            <p style={{ fontSize: 13, margin: 0 }}>Don't have an account?</p>
            <a style={{ fontSize: 13, color: '#ff0000' }}>Register Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
