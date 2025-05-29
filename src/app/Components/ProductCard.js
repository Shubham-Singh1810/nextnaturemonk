import React from "react";

function ProductCard({value}) {
  return (
    <div className="productCard shadow-sm border">
      <div className="d-flex justify-content-between align-items-center heartIcon pe-2">
        <h6 className="badge border text-dark m-2">{value?.category ? value?.category[0] :"Category"}</h6>
        <img
          className=""
          src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
        />
      </div>

      <div className="d-flex justify-content-center">
        <img
          src={value?.productHeroImage}
          className="img-fluid"
        />
      </div>

      <div className="p-2">
        <h4>{value?.name}</h4>
        <p>
          <s className="text-danger">{value?.price}</s>{" "}
          <span className="text-success text-bold">{value?.discountedPrice} &#8377;</span>
        </p>
        <p className="mb-md-3 mb-1 text-secondary">{value?.itemWeight} g</p>
        <div className="d-flex justify-content-around align-items-center ">
          <button className="">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
