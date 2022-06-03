import React from 'react'
import WatchIcon from "@mui/icons-material/Watch";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import FlatwareIcon from "@mui/icons-material/Flatware";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ToysIcon from "@mui/icons-material/Toys";
import DiamondIcon from "@mui/icons-material/Diamond";
import PowerIcon from "@mui/icons-material/Power";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CarRentalIcon from "@mui/icons-material/CarRental";
import './categories.css'

export default function Categories() {
  return (
    <div>
      <div className="CategoriesHeader p-3 rounded-top">
        <span className="category">Categories</span>
        <span>see all</span>
      </div>
      <div className="categoriesBody ">
        <ul>
          <li>
            <PowerIcon className="categoryIcons" fontSize="small" />
            <a href="">Electronic Accessories</a>
          </li>
          <li>
            <RestaurantMenuIcon className="categoryIcons" fontSize="small" />
            <a href="">Tv & Home Appliances</a>
          </li>
          <li>
            <HealthAndSafetyIcon className="categoryIcons" fontSize="small" />
            <a href="">Health & Beauty</a>
          </li>
          <li>
            <ToysIcon className="categoryIcons" fontSize="small" />
            <a href="">Babies & Toys</a>
          </li>
          <li>
            <FlatwareIcon className="categoryIcons" fontSize="small" />
            <a href="">Groceries & pets</a>
          </li>
          <li>
            <WatchIcon className="categoryIcons" fontSize="small" />
            <a href="">Home & Lifestyle</a>
          </li>
          <li>
            <WomanIcon className="categoryIcons" fontSize="small" />
            <a href="">Women's Fashion</a>
          </li>
          <li>
            <ManIcon className="categoryIcons" fontSize="small" />
            <a href="">Men's Fashion</a>
          </li>
          <li>
            <DiamondIcon className="categoryIcons" fontSize="small" />
            <a href="">Watches, Bags & Jewelary</a>
          </li>
          <li>
            <SportsBaseballIcon className="categoryIcons" fontSize="small" />
            <a href="">Sports & Outdoor</a>
          </li>
          <li>
            <CarRentalIcon className="categoryIcons" fontSize="small" />
            <a href="">Automotive & Motorbike</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
