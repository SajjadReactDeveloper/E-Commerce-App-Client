import React from "react";
import "./featured.css";
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


export default function FeaturedProducts() {
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
        <div className="d-flex mb-3 align-items-baseline border-bottom">
          <h3 className="h5 fw-700 mb-0">
            <span className="border-bottom border-primary border-width-2 pb-3 d-inline-block">
              Featured Products
            </span>
          </h3>
        </div>
        <Slider {...settings}>
          <div className="border">
            <div className="product-top">
              <img
                src="https://takenfree.com/public/uploads/all/yycrC.jpg"
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
            </div>
            <div className="product-bottom">
              <h6 className="text-danger">$500</h6>
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
                src="https://takenfree.com/public/uploads/all/XbIc6.jpg"
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
            <div className="product-bottom">
              <h6 className="text-danger">$500</h6>
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
                src="https://takenfree.com/public/uploads/all/hPql5.jpg"
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
            </div>
            <div className="product-bottom">
              <h6 className="text-danger">$500</h6>
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
                src="https://takenfree.com/public/uploads/all/S3QXh.jpg"
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
            </div>
            <div className="product-bottom">
              <h6 className="text-danger">$500</h6>
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
                src="https://takenfree.com/public/uploads/all/yycrC.jpg"
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
            </div>
            <div className="product-bottom">
              <h6 className="text-danger">$500</h6>
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
                src="https://takenfree.com/public/uploads/all/xl8xC.jpg"
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
            </div>
            <div className="product-bottom">
              <h6 className="text-danger">$500</h6>
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
  );
}
