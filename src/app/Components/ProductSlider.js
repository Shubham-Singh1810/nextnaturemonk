import React from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProductSlider({title, subTitle, productList}) {

  return (
    <div className="container py-3 py-md-5 productSliderDiv">
      <h1>{title}</h1>
      <h5>{subTitle}</h5>
        
      <div className="row py-3">
          {productList?.map((v, i) => {
          return (
            <div className="col-6 col-md-3 px-1 px-md-2 mb-2 mb-md-3">
              <ProductCard value={v}/>
            </div>
          );
        })}
        
      </div>
       
    </div>
  );
}

export default ProductSlider;
