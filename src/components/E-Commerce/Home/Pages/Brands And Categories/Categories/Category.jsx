import React from "react";
import "./category.css";
import Rating from "@mui/material/Rating";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Category() {
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
    <div className="mb-5">
      <div className="px-2 py-4 px-4 py-3 bg-white rounded">
        <div
          className="d-flex mb-3 align-items-baseline border-bottom"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="">
            <h3 className="h5 fw-700 mb-0">
              <span className="border-bottom border-danger border-width-3 pb-3 d-inline-block ">
                Top 10 Categories
              </span>
            </h3>
          </div>
          <div>
            <button
              className="btn btn-danger btn-sm"
              style={{ backgroundColor: "#ff0000" }}
            >
              View All Categories
            </button>
          </div>
        </div>
        <div className="">
          <div className="item border mb-3">
            <div className="row">
              <div className="col-3 brr ml-2 mb-2">
                <img
                  src="https://takenfree.com/public/assets/img/placeholder.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-7">
                <p>Smart Phones</p>
              </div>
              <div className="col-1 p-0 mr-1">
                <ChevronRightIcon color="error" />
              </div>
            </div>
          </div>
          <div className="item border mb-3">
            <div className="row">
              <div className="col-3 brr mb-2">
                <img
                  src="https://takenfree.com/public/assets/img/placeholder.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-7">
                <p>Smart Phones</p>
              </div>
              <div className="col-1 p-0 mr-1">
                <ChevronRightIcon color="error" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5" style={{ marginTop: 20 }}>
          <div className="item border">
            <div className="row">
              <div className="col-3 brr mb-2">
                <img
                  src="https://takenfree.com/public/assets/img/placeholder.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-7">
                <p>Smart Phones</p>
              </div>
              <div className="col-1 p-0 mr-1">
                <ChevronRightIcon color="error" />
              </div>
            </div>
          </div>
          <div className="item border">
            <div className="row">
              <div className="col-3 brr mb-2">
                <img
                  src="https://takenfree.com/public/assets/img/placeholder.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-7">
                <p>Smart Phones</p>
              </div>
              <div className="col-1 p-0 mr-1">
                <ChevronRightIcon color="error" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
