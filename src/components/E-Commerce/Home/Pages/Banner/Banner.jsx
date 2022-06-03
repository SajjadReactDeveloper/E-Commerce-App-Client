import React from 'react'
import Categories from './Pages/Categories/Categories';
import Products from './Pages/Products/Products';
import Slideshow from './Pages/SlideShow/Slideshow';
import TodayDeals from './Pages/Today Deals/TodayDeals';
import './banner.css'

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row gutter-10">
          <div className="col-3">
            <Categories />
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-12">
                <Slideshow />
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-0" style={{width: '396px'}}>
                <Products />
              </div>
            </div>
          </div>
          <div className="col-2">
            <TodayDeals />
          </div>
        </div>
      </div>
    </div>
  );
}
