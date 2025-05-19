// "use client"

// import React, { useState , useEffect } from "react";
// import Navbar from "../Components/Navbar";
// import PriceFilter from "../Components/PriceFilter";
// // import products from '../data/products';

// import productsData from "../../data/products";

// const page = () => {

//      const [priceRange, setPriceRange] = useState([50, 400]);
//   const [sortOption, setSortOption] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {

//     let filtered = productsData.filter(
//       (product) =>
//         product.price2 >= priceRange[0] && product.price2 <= priceRange[1]
//     );

//     if (sortOption === "high to low") {
//       filtered.sort((a, b) => b.price2 - a.price2);
//     } else if (sortOption === "low to high") {
//       filtered.sort((a, b) => a.price2 - b.price2);
//     }

//     setFilteredProducts(filtered);
//   }, [priceRange, sortOption]);

//   const [itemsToShow, setItemsToShow] = useState(10);

//   return (
//     <>
//       <Navbar />

//       <div className="shop-page">
//         <div className="shop-sections ">
//           <div className="category-section ">
//             <h5>Categories</h5>

//             {/* all categories */}

//             <div className="all-categroy mb-5">
//               <div className="category d-flex justify-content-between">
//                 <p className="mb-0 ">Dairy, Bread & Eggs</p>
//                 <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
//               </div>
//               <div className="category d-flex justify-content-between">
//                 <p className="mb-0">Snacks & Munchies</p>
//                 <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
//               </div>
//               <div className="category d-flex justify-content-between">
//                 <p className="mb-0">Fruits & Vegetables</p>
//                 <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
//               </div>
//               <div className="category d-flex justify-content-between">
//                 <p className="mb-0">Cold Drinks & Juices</p>
//                 <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
//               </div>
//               <div className="category d-flex justify-content-between">
//                 <p className="mb-0">Breakfast & Instant Food</p>
//                 <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
//               </div>
//               <div className="category d-flex justify-content-between">
//                 <p className="mb-0">Bakery & Biscuits</p>
//                 <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
//               </div>
//             </div>

//             {/* price filter */}

//              <PriceFilter
//               values={priceRange}
//               onChange={(range) => setPriceRange(range)}
//             />

//             {/* rating section */}

//             <div className="shop-rating mt-5">
//               <h5 className="mb-2">Rating</h5>
//               <div className="rate-input d-flex gap-2 mb-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="priceCheckbox"
//                 />
//                 <div className="d-flex gap-2">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                 </div>
//               </div>

//               <div className="rate-input d-flex gap-2 mb-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="priceCheckbox"
//                 />
//                 <div className="d-flex gap-2">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                 </div>
//               </div>

//               <div className="rate-input d-flex gap-2 mb-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="priceCheckbox"
//                 />
//                 <div className="d-flex gap-2">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                 </div>
//               </div>

//               <div className="rate-input d-flex gap-2 mb-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="priceCheckbox"
//                 />
//                 <div className="d-flex gap-2">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                 </div>
//               </div>

//               <div className="rate-input d-flex gap-2 mb-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="priceCheckbox"
//                 />
//                 <div className="d-flex gap-2">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                     className="rate"
//                   ></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                   <img src="/assets/blank-star.png" className="rate"></img>
//                 </div>
//               </div>
//             </div>

//             {/* daily sell section */}

//             <div className="daily-sell1 daily-selling ">
//               <h3 className="text-white">100% Natural & Organic Makhana.</h3>
//               <p className="text-white">Get the best deal before close.</p>
//               <div className="daily-shop d-flex gap-2 align-items-center justify-content-center my-3">
//                 <p className="fs-5 mb-0 text-white fs-6">Shop Now</p>
//                 <img src="/assets/next.png" alt="Next Icon" />
//               </div>
//             </div>
//           </div>

//           <div className="item-section pt-4">
//             {/* product search bar */}

//             <div className="d-flex gap-3">
//               <input
//                 className="product-search"
//                 placeholder="search for products"
//               ></input>
//               {/* <img src='https://cdn-icons-png.flaticon.com/128/54/54481.png' className="search-icon" ></img> */}

//               <select
//                 id="showSelect"
//                 className="form-select form-select-sm w-auto"
//                   value={itemsToShow}
//   onChange={(e) => setItemsToShow(Number(e.target.value))}
//               >
//                 <option value="10">Show: 10</option>
//                 <option value="10"> 10</option>
//                 <option value="12">12</option>
//                 <option value="16">16</option>
//               </select>

//               <select
//                 id="showSelect"
//                 className="form-select form-select-sm w-auto "
//                   onChange={(e) => setSortOption(e.target.value)}
//               >
//                 <option value="featured">Sort by: Featured</option>
//                 <option value="high to low">Price: High to Low</option>
//                 <option value="low to high">Price: Low to High</option>
//                 <option value="release date">Release Date</option>
//                 <option value="avg. rating">Avg. Rating</option>
//               </select>
//             </div>

//                <p className="product-quantity">
//         {filteredProducts.length} <span className="quantity-p">Products found</span>
//       </p>

//              <div className="products">
//               {/* {filteredProducts.map((product) => ( */}
//               {filteredProducts.slice(0, itemsToShow).map((product) => (
//                 <div className="shop-product-card d-flex flex-column justify-content-between" key={product.id}>
//                   {/* product card code */}
//                   <div>
//                     <img src={product.image} alt={product.description} className="product-img" />
//                     <p className="category1 mb-0">{product.category}</p>
//                     <p className="description">{product.description}</p>

//                          <div className="product-rating d-flex gap-1">
//                     <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="rate2" ></img>
//                     <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="rate2" ></img>
//                     <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"  className="rate2"></img>
//                     <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="rate2"></img>
//                     <img src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png" className="rate2" ></img>
//                     <p className="">4.4(4)</p>
//                   </div>

//                     <div className="wishlist-icon">
//                       <img src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png" alt="wishlist" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="price d-flex gap-1">
//                       <p className="shop-price2 fw-bold ">₹{product.price2}</p>
//                       <p className="shop-price1 text-muted text-decoration-line-through">₹{product.price1}</p>
//                     </div>
//                     <button className="shop-addCart-btn">+ Add to Cart</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import PriceFilter from "../Components/PriceFilter";
// import products from '../data/products';

import productsData from "../../data/products";

const page = () => {
  const [priceRange, setPriceRange] = useState([50, 400]);
  const [sortOption, setSortOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = productsData.filter(
      (product) =>
        product.price2 >= priceRange[0] && product.price2 <= priceRange[1]
    );

    if (sortOption === "high to low") {
      filtered.sort((a, b) => b.price2 - a.price2);
    } else if (sortOption === "low to high") {
      filtered.sort((a, b) => a.price2 - b.price2);
    }

    setFilteredProducts(filtered);
  }, [priceRange, sortOption]);

  const [itemsToShow, setItemsToShow] = useState(10);

  return (
    <>
      <Navbar />

      <div className="shop-page">
        <div className="shop-sections ">
          <div className={`category-section ${showFilters ? "open" : ""}`}>
            <div className="close-btn" onClick={() => setShowFilters(false)}>
              <img src="https://cdn-icons-png.flaticon.com/128/2732/2732657.png"></img>
            </div>
            {/* rest of your category section */}

            <h5>Categories</h5>

            {/* all categories */}

            <div className="all-categroy mb-5">
              <div className="category d-flex justify-content-between">
                <p className="mb-0 ">Dairy, Bread & Eggs</p>
                <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
              </div>
              <div className="category d-flex justify-content-between">
                <p className="mb-0">Snacks & Munchies</p>
                <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
              </div>
              <div className="category d-flex justify-content-between">
                <p className="mb-0">Fruits & Vegetables</p>
                <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
              </div>
              <div className="category d-flex justify-content-between">
                <p className="mb-0">Cold Drinks & Juices</p>
                <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
              </div>
              <div className="category d-flex justify-content-between">
                <p className="mb-0">Breakfast & Instant Food</p>
                <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
              </div>
              <div className="category d-flex justify-content-between">
                <p className="mb-0">Bakery & Biscuits</p>
                <img src="https://cdn-icons-png.flaticon.com/128/130/130884.png" />
              </div>
            </div>

            {/* price filter */}

            <PriceFilter
              values={priceRange}
              onChange={(range) => setPriceRange(range)}
            />

            {/* rating section */}

            <div className="shop-rating mt-5">
              <h5 className="mb-2">Rating</h5>
              <div className="rate-input d-flex gap-2 mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="priceCheckbox"
                />
                <div className="d-flex gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                </div>
              </div>

              <div className="rate-input d-flex gap-2 mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="priceCheckbox"
                />
                <div className="d-flex gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                </div>
              </div>

              <div className="rate-input d-flex gap-2 mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="priceCheckbox"
                />
                <div className="d-flex gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                </div>
              </div>

              <div className="rate-input d-flex gap-2 mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="priceCheckbox"
                />
                <div className="d-flex gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                </div>
              </div>

              <div className="rate-input d-flex gap-2 mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="priceCheckbox"
                />
                <div className="d-flex gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="rate"
                  ></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                  <img src="/assets/blank-star.png" className="rate"></img>
                </div>
              </div>
            </div>

            {/* daily sell section */}

            <div className="daily-sell1 daily-selling ">
              <h3 className="text-white">100% Natural & Organic Makhana.</h3>
              <p className="text-white">Get the best deal before close.</p>
              <div className="daily-shop d-flex gap-2 align-items-center justify-content-center my-3">
                <p className="fs-5 mb-0 text-white fs-6">Shop Now</p>
                <img src="/assets/next.png" alt="Next Icon" />
              </div>
            </div>
          </div>

          {/* product show / item section */}

          <div className="item-section pt-4">
            <div className="all-filters d-flex gap-3">
              {/* product search bar */}
              <input
                className="product-search"
                placeholder="search for products"
              ></input>
              {/* <img src='https://cdn-icons-png.flaticon.com/128/54/54481.png' className="search-icon" ></img> */}

              <div className="d-flex gap-1 bottom-filters justify-content-between">
                {/* filter toggle button */}
                <div className="filter-outer">
                  <button
                    className="btn  filters-toggle-btn "
                    onClick={() => setShowFilters(true)}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/15430/15430342.png"
                      className="filter-img"
                    ></img>
                    Filters
                  </button>
                </div>

                <div className="last-filters d-flex gap-lg-3 gap-sm-2 gap-1">
                  {/* show products */}
                  <select
                    id="showSelect"
                    className="form-select form-select-sm w-auto"
                    value={itemsToShow}
                    onChange={(e) => setItemsToShow(Number(e.target.value))}
                  >
                    <option value="10">Show: 10</option>
                    <option value="10"> 10</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                  </select>

                  {/* sort products */}
                  <select
                    id="showSelect"
                    className="form-select form-select-sm w-auto "
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="high to low">Price: High to Low</option>
                    <option value="low to high">Price: Low to High</option>
                    <option value="release date">Release Date</option>
                    <option value="avg. rating">Avg. Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* total found products */}

            <p className="product-quantity">
              {filteredProducts.length}{" "}
              <span className="quantity-p">Products found</span>
            </p>

            <div className="products">
              {/* {filteredProducts.map((product) => ( */}
              {filteredProducts.slice(0, itemsToShow).map((product) => (
                <div
                  className="shop-product-card d-flex flex-column justify-content-between"
                  key={product.id}
                >
                  {/* product card code */}
                  <div>
                    <div className="shop-product-img">
                      <img src={product.image} alt={product.description} className="product-img"  />
                    </div>


                    <div className="inner-product">

                      <p className="category1 mb-0">{product.category}</p>
                    <p className="description">{product.description}</p>

                    <div className="product-rating d-flex align-items-center gap-1">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                        className="rate2"
                      ></img>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                        className="rate2"
                      ></img>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                        className="rate2"
                      ></img>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                        className="rate2"
                      ></img>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
                        className="rate2"
                      ></img>
                      <p className="mb-0">4.4(4)</p>
                    </div>

                    <div className="shop-wishlist-icon">
                      <img src="https://cdn-icons-png.flaticon.com/128/13369/13369080.png" />
                    </div>
                  
                    <div className="price d-flex gap-1">
                      <p className="shop-price2 fw-bold ">₹{product.price2}</p>
                      <p className="shop-price1 text-muted text-decoration-line-through">
                        ₹{product.price1}
                      </p>
                    </div>
                    {/* <button className="shop-addCart-btn">+ Add to Cart</button> */}
                       </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
