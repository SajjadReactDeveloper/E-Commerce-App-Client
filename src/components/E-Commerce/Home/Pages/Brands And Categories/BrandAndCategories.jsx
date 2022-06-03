import React from 'react';
import './brandAndCategories.css'
import Brands from './Brands/Brands';
import Category from './Categories/Category';

export default function BrandAndCategories() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-0">
          <Category />
        </div>
        <div className="col-6 p-0">
          <Brands />
        </div>
      </div>
    </div>
  );
}
