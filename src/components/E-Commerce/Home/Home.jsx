import React from 'react'
import MainNavbar from "../Home/Pages/Navbar/Navbar";
import Banner from './Pages/Banner/Banner';
import Adds from './Pages/Adds/Adds';
import FeaturedProducts from './Pages/FeaturedProducts/FeaturedProducts';
import BestSellings from './Pages/BestSellings/BestSellings';
import WomenClothing from './Pages/WomenClothingAndFashion/WomenClothing';
import BestSellers from './Pages/Best Sellers/BestSellers';
import BrandAndCategories from './Pages/Brands And Categories/BrandAndCategories';
import TermsAndConditions from './Pages/Terms And Conditions/TermsAndConditions';
import Footer from './Pages/Footer/Footer';

function Home() {
  return (
    <div>
      <MainNavbar style={{position: 'fixed'}}/>
      <Banner />
      <Adds />
      <FeaturedProducts />
      <BestSellings />
      <WomenClothing />
      <BestSellers />
      <BrandAndCategories />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}

export default Home