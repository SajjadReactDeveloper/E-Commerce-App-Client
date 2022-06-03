import React from "react";
import "./womenClothing.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export default function WomenClothing() {
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
      <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
        <div
          className="d-flex mb-3 align-items-baseline border-bottom"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="">
            <h3 className="h5 fw-700 mb-0">
              <span className="border-bottom border-danger border-width-3 pb-3 d-inline-block ">
                Women Clothing & Fashion
              </span>
            </h3>
          </div>
          <div>
            <button className="btn btn-danger btn-sm" style = {{backgroundColor: '#ff0000'}}>View More</button>
          </div>
        </div>
        <div className="container">
          <Slider {...settings}>
            <div className="border">
              <div className="product-top">
                <img
                  src="https://takenfree.com/public/uploads/all/Nmg5V.jpg"
                  alt=""
                />
                <div className="overlay">
                  <ul>
                    <Tooltip title="Add to Cart" arrow placement="left">
                      <li>
                        <ShoppingCartIcon fontSize="small" />
                      </li>
                    </Tooltip>

                    <Tooltip title="Add to Favourite" arrow placement="left">
                      <li>
                        <FavoriteBorderIcon fontSize="small" />
                      </li>
                    </Tooltip>
                    <Tooltip title="Add to Compare" arrow placement="left">
                      <li>
                        <CompareArrowsIcon fontSize="small" />
                      </li>
                    </Tooltip>
                  </ul>
                </div>
                <div className="discount">
                  <span class="badge-custom">
                    OFF<span class="box ml-1">&nbsp;9%</span>
                  </span>
                </div>
              </div>
              <div className="product-bottom">
                <h6 className="text-danger">
                  <del className="text-secondary">$500</del> $200
                </h6>
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <h6>T-Shirt</h6>
              </div>
            </div>
            <div className="border">
              <div className="product-top">
                <img
                  src="	https://takenfree.com/public/uploads/all/bPQK3.jpg"
                  alt=""
                />
              </div>
              <div className="overlay">
                <ul>
                  <Tooltip title="Add to Cart" arrow placement="left">
                    <li>
                      <ShoppingCartIcon fontSize="small" />
                    </li>
                  </Tooltip>
                  <Tooltip title="Add to Favourite" arrow placement="left">
                    <li>
                      <FavoriteBorderIcon fontSize="small" />
                    </li>
                  </Tooltip>
                  <Tooltip title="Add to Compare" arrow placement="left">
                    <li>
                      <CompareArrowsIcon fontSize="small" />
                    </li>
                  </Tooltip>
                </ul>
              </div>
              <div className="discount">
                <span class="badge-custom">
                  OFF<span class="box ml-1">&nbsp;9%</span>
                </span>
              </div>
              <div className="product-bottom">
                <h6 className="text-danger">
                  <del className="text-secondary">$500</del> $200
                </h6>
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <h6>T-Shirt</h6>
              </div>
            </div>
            <div className="border">
              <div className="product-top">
                <img
                  src="https://takenfree.com/public/uploads/all/HFC10.jpg"
                  alt=""
                />
                <div className="overlay">
                  <ul>
                    <Tooltip title="Add to Cart" arrow placement="left">
                      <li>
                        <ShoppingCartIcon fontSize="small" />
                      </li>
                    </Tooltip>
                    <Tooltip title="Add to Favourite" arrow placement="left">
                      <li>
                        <FavoriteBorderIcon fontSize="small" />
                      </li>
                    </Tooltip>
                    <Tooltip title="Add to Compare" arrow placement="left">
                      <li>
                        <CompareArrowsIcon fontSize="small" />
                      </li>
                    </Tooltip>
                  </ul>
                </div>
                <div className="discount">
                  <span class="badge-custom">
                    OFF<span class="box ml-1">&nbsp;9%</span>
                  </span>
                </div>
              </div>
              <div className="product-bottom">
                <h6 className="text-danger">
                  <del className="text-secondary">$500</del> $200
                </h6>
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <h6>T-Shirt</h6>
              </div>
            </div>
            <div className="border">
              <div className="product-top">
                <img
                  src="https://takenfree.com/public/uploads/all/vjSv0.jpg"
                  alt=""
                />
                <div className="overlay">
                  <ul>
                    <Tooltip title="Add to Cart" arrow placement="left">
                      <li>
                        <ShoppingCartIcon fontSize="small" />
                      </li>
                    </Tooltip>
                    <Tooltip title="Add to Favourite" arrow placement="left">
                      <li>
                        <FavoriteBorderIcon fontSize="small" />
                      </li>
                    </Tooltip>
                    <Tooltip title="Add to Compare" arrow placement="left">
                      <li>
                        <CompareArrowsIcon fontSize="small" />
                      </li>
                    </Tooltip>
                  </ul>
                </div>
                <div className="discount">
                  <span class="badge-custom">
                    OFF<span class="box ml-1">&nbsp;9%</span>
                  </span>
                </div>
              </div>
              <div className="product-bottom">
                <h6 className="text-danger">
                  <del className="text-secondary">$500</del> $200
                </h6>
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <h6>T-Shirt</h6>
              </div>
            </div>
            <div className="border">
              <div className="product-top">
                <img
                  src="https://takenfree.com/public/uploads/all/h6MAT.jpg"
                  alt=""
                />
                <div className="overlay">
                  <ul>
                    <Tooltip title="Add to Cart" arrow placement="left">
                      <li>
                        <ShoppingCartIcon fontSize="small" />
                      </li>
                    </Tooltip>
                    <Tooltip title="Add to Favourite" arrow placement="left">
                      <li>
                        <FavoriteBorderIcon fontSize="small" />
                      </li>
                    </Tooltip>

                    <Tooltip title="Add to Compare" arrow placement="left">
                      <li>
                        <CompareArrowsIcon fontSize="small" />
                      </li>
                    </Tooltip>
                  </ul>
                </div>
                <div className="discount">
                  <span class="badge-custom">
                    OFF<span class="box ml-1">&nbsp;9%</span>
                  </span>
                </div>
              </div>
              <div className="product-bottom">
                <h6 className="text-danger">
                  <del className="text-secondary">$500</del> $200
                </h6>
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <h6>T-Shirt</h6>
              </div>
            </div>
            <div className="border">
              <div className="product-top">
                <img
                  src="https://takenfree.com/public/uploads/all/HyUoH.jpg"
                  alt=""
                />
                <div className="overlay">
                  <ul>
                    <Tooltip title="Add to Cart" arrow placement="left">
                      <li>
                        <ShoppingCartIcon fontSize="small" />
                      </li>
                    </Tooltip>
                    <Tooltip title="Add to Favourite" arrow placement="left">
                      <li>
                        <FavoriteBorderIcon fontSize="small" />
                      </li>
                    </Tooltip>
                    <Tooltip title="Add to Compare" arrow placement="left">
                      <li>
                        <CompareArrowsIcon fontSize="small" />
                      </li>
                    </Tooltip>
                  </ul>
                </div>
                <div className="discount">
                  <span class="badge-custom">
                    OFF<span class="box ml-1">&nbsp;9%</span>
                  </span>
                </div>
              </div>
              <div className="product-bottom">
                <h6 className="text-danger">
                  <del className="text-secondary">$500</del> $200
                </h6>
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <h6>T-Shirt</h6>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
