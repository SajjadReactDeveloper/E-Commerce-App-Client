import React from "react";
import "./bestSellers.css";
import Rating from "@mui/material/Rating";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function BestSellers() {
  const [value, setValue] = React.useState(0);

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="container mb-5">
      <div className="px-2 py-4 px-4 py-3 bg-white rounded">
        <div
          className="d-flex mb-3 align-items-baseline border-bottom"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="">
            <h3 className="h5 fw-700 mb-0">
              <span className="border-bottom border-danger border-width-3 pb-3 d-inline-block ">
                Best Sellers
              </span>
            </h3>
          </div>
          <div>
            <button
              className="btn btn-danger btn-sm"
              style={{ backgroundColor: "#ff0000" }}
            >
              View All Sellers
            </button>
          </div>
        </div>
        <div
          className="row no-gutters m-auto border rounded my-2"
          style={{ width: "331px" }}
        >
          <div className="col-4 border-right">
            <a
              href="https://takenfree.com/shop/Demo-Seller-Shop-1"
              className="d-block p-3"
              tabindex="0"
            >
              <img
                src=" https://takenfree.com/public/assets/img/placeholder.jpg "
                data-src=" https://takenfree.com/public/assets/img/placeholder.jpg "
                alt="Demo Seller Shop"
                className="img-fluid ls-is-cached lazyloaded"
              />
            </a>
          </div>
          <div className="col-8 border-left">
            <div className="p-3 text-left">
              <h2 className="h6 fw-600 text-truncate">
                <a href="" className="text-reset text-decoration-none" tabindex="0">
                  Demo Seller Shop
                </a>
              </h2>
              <div className="rating rating-sm mb-2">
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
              <a href="" className="btn btn-primary btn-sm" tabindex="0">
                Visit Store <ChevronRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
