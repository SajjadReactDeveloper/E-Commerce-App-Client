import React from "react";
import "./footer.css";
import SearchIcon from "@mui/icons-material/Search";

function Footer() {
  return (
    <div>
      <section className="bg-dark py-5 text-light footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <a
                href="https://takenfree.com"
                className="d-block text-decoration-none text-danger"
              >
                {/* <img
                  className="lazyload"
                  src="https://takenfree.com/public/assets/img/placeholder-rect.jpg"
                  data-src="https://takenfree.com/public/uploads/all/zAwfJfRCUKIhGntUfQhpGnlN0v4bzWUkRmyjrQFf.png"
                  alt="Online Shopping"
                  height="68"
                /> */}
                Take N Free
              </a>
              <div className="my-3 w-75">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn"
                      style={{ backgroundColor: "red", color: "white" }}
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4
                className="fs-13 border-bottom border-gray text-uppercase fw-600 mb-4 pb-2"
                style={{ fontSize: 13 }}
              >
                Contact Info
              </h4>
              <ul className="list-unstyled" style={{ fontSize: 13 }}>
                <li className="mb-2">
                  <span className="d-block opacity-30" style={{ opacity: 0.3 }}>
                    Address:
                  </span>
                  <span className="d-block opacity-70">
                    kingdom of Saudi arabia mecca hajj street
                  </span>
                </li>
                <li className="mb-2">
                  <span className="d-block opacity-30" style={{ opacity: 0.3 }}>
                    Phone:
                  </span>
                  <span className="d-block opacity-70">00966560820521</span>
                </li>
                <li className="mb-2">
                  <span className="d-block opacity-30" style={{ opacity: 0.3 }}>
                    Email:
                  </span>
                  <span className="d-block opacity-70">
                    <a
                      href="mailto:Takenfree786@gmail.com"
                      className="text-reset text-decoration-none"
                    >
                      Takenfree786@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-2"></div>
            <div className="col-2">
              <h4
                className="fs-13 text-uppercase fw-600 border-bottom border-light pb-2 mb-4"
                style={{ fontSize: 13 }}
              >
                My Account
              </h4>
              <ul className="list-unstyled" style={{ fontSize: 13 }}>
                <li className="mb-2">
                  <a
                    className="opacity-50 hov-opacity-100 text-decoration-none text-reset"
                    href="https://takenfree.com/users/login"
                  >
                    Login
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="opacity-50 hov-opacity-100 text-decoration-none text-reset"
                    href="https://takenfree.com/purchase_history"
                  >
                    Order History
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="opacity-50 hov-opacity-100 text-decoration-none text-reset"
                    href="https://takenfree.com/wishlists"
                  >
                    My Wishlist
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="opacity-50 hov-opacity-100 text-decoration-none text-reset"
                    href="https://takenfree.com/track-your-order"
                  >
                    Track Order
                  </a>
                </li>
              </ul>
              <div className="text-left text-md-left mt-4">
                <h4 className="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4" style = {{fontSize: 13}}>
                  Be A Seller
                </h4>
                <a
                  href="https://takenfree.com/shops/create"
                  className="btn btn-sm shadow-md"
                  style = {{backgroundColor: '#ff0000', color: 'white'}}
                >
                  Apply Now
                </a>
              </div>
            </div>

    
          </div>
        </div>
      </section>
      <footer class="pt-3 pb-7 pb-xl-3 bg-black text-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <div class="text-center text-md-left">
                <p>
                  Design By
                  <a
                    href="https://worldsoltech.com/"
                    className="text-decoration-none ml-3 text-danger"
                    style={{ color: "#ff0000", marginLeft: 6 }}
                    target="_blank"
                  >
                    ABM Technologies
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
