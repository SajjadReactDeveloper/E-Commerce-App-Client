import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge";
import './navbar.css'

function Navbar() {
  return (
    <div className="navbarItems border-bottom">
      <div className="logo">
        <p>Take N Free</p>
      </div>
      <div className="icons">
        <div className="searchbar">
          <div class="input-group mb-3">
            <input
              type="text"
              placeholder="I am shopping for..."
              class="form-control"
            />
            <div class="input-group-append">
              <button
                class="btn"
                style={{ backgroundColor: "red", color: "white" }}
                type="button"
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="icon">
          <CompareArrowsIcon style={{ marginRight: 5 }} />
          <div className="">
            <p
              style={{
                margin: 0,
                backgroundColor: "red",
                color: "white",
                padding: 10,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: 20,
                height: 20,
              }}
            >
              0
            </p>
            Compare
          </div>
        </div>
        <div className="icon">
          <FavoriteBorderIcon style={{ marginRight: 5 }} />{" "}
          <div className="">
            <p
              style={{
                margin: 0,
                backgroundColor: "red",
                color: "white",
                padding: 10,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: 20,
                height: 20,
              }}
            >
              0
            </p>
            Wishlist
          </div>
        </div>
        <div className="icon">
          <ShoppingCartIcon style={{ marginRight: 5 }} />{" "}
          <div className="">
            <p
              style={{
                margin: 0,
                backgroundColor: "red",
                color: "white",
                padding: 10,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: 20,
                height: 20,
              }}
            >
              0
            </p>
            Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
