"use client";
import React from "react";
import Navbar from "../../Components/Navbar";
import { useState, useEffect, useContext } from "react";
import { getProduct } from "../../services/product.service";
import { useParams } from "next/navigation";
import { LoggedDataContext } from "../../context/Context";
import {useRouter} from "next/navigation"
import Footer from "../../Components/Footer";
function page() {
  const { cartList, setCartList } = useContext(LoggedDataContext);
  const router = useRouter()
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [ratingList, setRatingList]=useState([])
  const getProductDetails = async () => {
    try {
      let response = await getProduct(id);
      setDetails(response.product);
      setRatingList(response?.ratingList)
    } catch (error) {}
  };
  useEffect(() => {
    getProductDetails();
  }, [id]);
   const [selectedTab, setSelectedTab] = useState("Product Details");
   const [selectedVariant, setSelectedVariant] = useState(null);
   // add to cart

  const handleAddToCartLocal = (e, v) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      let localCartList = JSON.parse(localStorage.getItem("cartList")) || [];

      const existingProduct = localCartList.find((item) => item._id === v._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        localCartList.push({ ...v, quantity: 1 });
      }

      localStorage.setItem("cartList", JSON.stringify(localCartList));
      setCartList(localCartList);
      toast.success("Item Added To the cart");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const handleIncreaseQty = (e, v) => {
    e.preventDefault();
    e.stopPropagation();
    let localCartList = JSON.parse(localStorage.getItem("cartList")) || [];

    const existingProduct = localCartList.find((item) => item._id === v._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    }

    localStorage.setItem("cartList", JSON.stringify(localCartList));
    setCartList(localCartList);
  };

  const handleDecreaseQty = (e, v) => {
    e.preventDefault();
    e.stopPropagation();
    let localCartList = JSON.parse(localStorage.getItem("cartList")) || [];

    const existingProduct = localCartList.find((item) => item._id === v._id);
    if (existingProduct) {
      existingProduct.quantity -= 1;
      if (existingProduct.quantity <= 0) {
        localCartList = localCartList.filter((item) => item._id !== v._id);
      }
    }

    localStorage.setItem("cartList", JSON.stringify(localCartList));
    setCartList(localCartList);
  };
  // buy now function

  const handleBuyNow = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      let localCartList = JSON.parse(localStorage.getItem("cartList")) || [];
      const existingProduct = localCartList.find(
        (item) => item._id === product._id
      );

      if (!existingProduct) {
        localCartList.push({ ...product, quantity: 1 });
        localStorage.setItem("cartList", JSON.stringify(localCartList));
        setCartList(localCartList);
      }

      router.push("/check-out");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  return (
    <div>
      <Navbar selectedItem="Shop" />
      <div className="container my-md-5 my-4">
        <div className="d-flex mt-md-5 mt-5 breadcrumb">
            <p style={{ color: "rgb(188 94 94)" , cursor:"pointer" }} onClick={() => router.push("/")}>Home -</p>
            <p style={{ color: "red", cursor:"pointer"  }}  onClick={() => router.push("/shop")}>Shop -</p>
            <p>{details?.name}</p>
          </div>
         <div className="row px-md-2 px-0 marginLeft0">
              <div className="col-md-6 col-12 row px-md-2 px-0">
                <div className="col-md-12 col-12 d-flex justify-content-center align-items-center border  mb-2">
                  <img
                    src={
                      selectedVariant
                        ? selectedVariant?.variantImage
                        : details?.productHeroImage
                    }
                    style={{ height: "400px", width: "400px" }}
                  />
                </div>
                <div className="col-md-12 col-12 row my-auto">
                  {details?.productGallery?.map((v, i) => {
                    return (
                      <div className="p-0 m-0 border col-3">
                        <img
                          src={v}
                          className="img-fluid"
                          style={{ height: "100px", width: "100%" }}
                        />
                      </div>
                    );
                  })}
                  {details?.productVariants?.map((v, i) => {
                    return (
                      <div className="p-0 m-0 border col-3">
                        <img
                          src={v?.variantImage}
                          className="img-fluid"
                          style={{ height: "100px", width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6 col-12 mx-md-2 mx-0 px-md-2 px-0">
                <div className="border rounded p-4 productDetailsDiv mt-md-0 mt-3">
                  {selectedVariant ? (
                    <h5 className="badge" style={{ background: "#3D9970" }}>
                      Save{" "}
                      {(
                        ((selectedVariant?.variantPrice -
                          selectedVariant?.variantDiscountedPrice) /
                          selectedVariant?.variantPrice) *
                        100
                      ).toFixed(2)}
                      %
                    </h5>
                  ) : (
                    <h5 className="badge" style={{ background: "#3D9970" }}>
                      Save{" "}
                      {(
                        ((details?.price - details?.discountedPrice) /
                          details?.price) *
                        100
                      ).toFixed(2)}
                      %
                    </h5>
                  )}

                  <h1 className="my-2">{details?.name}</h1>
                  <div className="d-flex align-items-center reviewDiv">
                    {[...Array(Math.round(Number(details?.rating) || 0))].map(
                      (_, i) => (
                        <img
                          key={i}
                          src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                          style={{ height: "20px", marginRight: "4px" }}
                        />
                      )
                    )}

                    <a>({ratingList?.length} reviews)</a>
                  </div>
                  <hr />

                  <div>{details?.productVariants[0]?.variantKey}</div>
                  <div className="d-flex my-2" style={{ overflow: "auto" }}>
                    {details?.productVariants?.map((v, i) => {
                      return (
                        <div
                          className="varientDiv mb-2 "
                          style={{ cursor: "pointer" }}
                          onClick={() => setSelectedVariant(v)}
                        >
                          <div
                            className="d-flex me-2"
                            style={{
                              border:
                                selectedVariant?._id == v?._id
                                  ? "2px solid green"
                                  : "none",
                              borderRadius: "10px",
                            }}
                          >
                            <div className="  py-0 ">
                              <img
                                src={v?.variantImage}
                                style={{
                                  height: "110px",
                                  width: "150px",
                                  borderRadius: "10px 10px 0px 0px",
                                }}
                              />
                              <div className="p-1">
                                <p className="mb-0">{v?.variantValue}</p>
                                <p className="mb-0">
                                  Price : <s>{v?.variantPrice}</s>:{" "}
                                  <b>{v?.variantDiscountedPrice} INR</b>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <h5 className="mb-mb-3 mb-1">
                      M.R.P :{" "}
                      <s className="text-secondary">
                        Rs.{" "}
                        {selectedVariant
                          ? selectedVariant?.variantPrice
                          : details?.price}
                      </s>
                    </h5>
                  </div>
                  <div>
                    <h5>
                      Discounted Price :{" "}
                      <span className="discountedPrice">
                        R.s{" "}
                        {selectedVariant
                          ? selectedVariant?.variantDiscountedPrice
                          : details?.discountedPrice}
                      </span>{" "}
                      {details?.tax}
                      {" included"}
                    </h5>
                  </div>
                  <div>
                    <h5>
                      Brand : <span>{details?.brandId?.name}</span>
                    </h5>
                  </div>
                  <div>
                    <h5>
                      Tags :{" "}
                      {details?.tags?.map((v, i) => {
                        return <span>{v},</span>;
                      })}
                    </h5>
                  </div>

                  <div className="d-flex justify-content-between mt-md-3 mt-1 gap-3 align-items-center productDetailsBtn col-sm-10 col-12 p-0">
                    {cartList?.find((item) => item._id === details?._id) ? (
                      <div
                        className="d-flex align-items-center counterDiv w-100 overflow-hidden"
                        style={{ borderRadius: "5px", height: "41px" }}
                      >
                        <p
                          style={{ height: "100%" }}
                          className="w-100 text-white mb-0 d-flex justify-content-center align-items-center bg-danger "
                          onClick={(e) => handleDecreaseQty(e, details)}
                        >
                          -
                        </p>
                        <p
                          className="w-100 mb-0 d-flex justify-content-center align-items-center"
                          style={{ backgroundColor: "#f9f5f5", height: "100%" }}
                        >
                          {
                            cartList.find((item) => item._id === details?._id)
                              ?.quantity
                          }
                        </p>
                        <p
                          className="w-100 text-white mb-0 d-flex justify-content-center align-items-center bg-danger"
                          style={{  height: "100%" }}
                          onClick={(e) => handleIncreaseQty(e, details)}
                        >
                          +
                        </p>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => handleAddToCartLocal(e, details)}
                        className="w-100 bg-danger"
                      >
                        Add To Cart
                      </button>
                    )}

                    <button
                      className="w-100 bg-warning"
                      onClick={(e) => handleBuyNow(e, details)}
                    >
                      Buy Now
                    </button>
                  </div>
                  <hr />
                  <div>
                    <h5
                      dangerouslySetInnerHTML={{
                        __html: details?.shortDescription,
                      }}
                    ></h5>
                    <u>read more</u>
                  </div>
                  <div>
                    <h5>
                      Product Code :{" "}
                      <span className="border  px-2 rounded">
                        {details?.hsnCode}
                      </span>
                    </h5>
                  </div>
                  <div>
                    <h5>
                      Stock Quantity :{" "}
                      <span className="border  px-2 rounded">
                        {details?.stockQuantity}
                      </span>
                    </h5>
                  </div>
                  <div>
                    <h5 className="mb-0">
                      Type :{" "}
                      <span className="border  px-2 rounded">
                        {details?.productType || "N/A"}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12  p-2 mt-3 order-3 d-md-block d-none">
                <div className="d-flex  productDetailsLeftBtnGroup">
                  <p
                    onClick={() => setSelectedTab("Product Details")}
                    className={
                      selectedTab == "Product Details"
                        ? " bg-secondary text-light "
                        : " "
                    }
                  >
                    Product Details
                  </p>
                  <p
                    onClick={() => setSelectedTab("Reviews")}
                    className={
                      selectedTab == "Reviews"
                        ? " bg-secondary text-light "
                        : " "
                    }
                  >
                    Reviews
                  </p>
                </div>
              </div>
            </div>
            {selectedTab == "Product Details" && (
              <div>
              <div className="productDetailsDiv mt-3 row">
                <div className=" col-12 border">
                  <div className="  p-2">
                    <h3 className="mb-0">About The Product</h3>

                    <div>
                      <h4>
                        Category :{" "}
                        {details?.categoryId?.map((v, i) => {
                          return <span>{v?.name}</span>;
                        })}
                      </h4>

                      <div className=" ">
                        <h4>Description : </h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: details?.description,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productDetailsDiv d-block d-md-none mt-3 row">
                <div className="col-12 border">
                  <div className="  p-2">
                    <h3 className="mb-0">Peopls Thought's</h3>

                    <div className="row">
                      {ratingList?.map((v, i) => {
                        return (
                          <div className="col-lg-6 col-12">
                            <div className="reviewBox p-2 py-3 shadow-sm mb-3 mt-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <img style={{height:"60px"}} src={v?.userId?.profilePic ? v?.userId?.profilePic: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png"} />
                                </div>
                                <div className="ms-3">
                                  <h5>{v?.userId?.firstName +" "+ v?.userId?.lastName}</h5>
                                  <div className="d-flex starGroup">
                                    {[...Array(Math.round(Number(v?.rating) || 0))].map(
                      (_, i) => (
                        <img
                          key={i}
                          src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                          style={{ height: "20px", marginRight: "4px" }}
                        />
                      )
                    )}
                                  </div>
                                  <p className="mb-0">
                                   {v?.review}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {ratingList?.length == 0 && <div className=" p-2 ">
                        <img src="https://cdn-icons-png.flaticon.com/256/6840/6840178.png"/>
                        <h5 className="text-secondary">No rewiews found</h5>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )}
             {selectedTab == "Reviews" && (
              <div className="productDetailsDiv mt-3 row">
                <div className="col-12 border">
                  <div className="  p-2">
                    <h3 className="mb-0">Peopls Thought's</h3>

                    <div className="row">
                      {ratingList?.map((v, i) => {
                        return (
                          <div className="col-lg-6 col-12">
                            <div className="reviewBox p-2 py-3 shadow-sm mb-3 mt-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <img   src={v?.userId?.profilePic ? v?.userId?.profilePic: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png"} />
                                </div>
                                <div className="ms-3">
                                  <h5>{v?.userId?.firstName +" "+ v?.userId?.lastName}</h5>
                                  <div className="d-flex starGroup">
                                    {[...Array(Math.round(Number(v?.rating) || 0))].map(
                      (_, i) => (
                        <img
                          key={i}
                          src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                          style={{ height: "20px", marginRight: "4px" }}
                        />
                      )
                    )}
                                  </div>
                                  <p className="mb-0">
                                   {v?.review}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {ratingList?.length == 0 && <div className=" p-2 ">
                        <img src="https://cdn-icons-png.flaticon.com/256/6840/6840178.png"/>
                        <h5 className="text-secondary">No rewiews found</h5>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            )}
      </div>
    </div>
  );
}

export default page;
