"use client";

import DailySell from "./Components/DailySell";
import FeaturedCarousel from "./Components/FeaturedCarousel";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Testimonals from "./Components/Testimonals";
import Faq from "./Components/Faq";
import ShopFromFarm from "./Components/ShopFromFarm";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import { getProductServ, getCategory } from "./services/product.service";
import ProductSlider from "./Components/ProductSlider";
import InfoContainer from "./Components/InfoContainer";
import FooterNav from "./Components/FooterNav";
import BlogSlider from "./Components/BlogSlider";

export default function Home() {
  const [productlist, setProductList] = useState([]);
  const getProductList = async () => {
    try {
      let response = await getProductServ();
      console.log(response?.data);
      if (response?.statusCode == "200") {
        setProductList(response?.data);
      }
    } catch (error) {}
  };
  const [categorylist, setCategoryList] = useState([]);
  const getCategoryList = async () => {
    try {
      let response = await getCategory();
      console.log(response?.data);
      if (response?.statusCode == "200") {
        setCategoryList(response?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getProductList();
    getCategoryList();
  }, []);
  return (
    <>
      <Navbar selectedItem="Home" />
      <HeroSection />
      <InfoContainer />
      <ProductSlider
        title="Most Popular"
        subTitle="Discover flavours in demand"
        productList={productlist}
      />
      <FeaturedCarousel categorylist={categorylist} />
      <ProductSlider
        title="Our Shop"
        subTitle="From our Farm"
        productList={productlist}
      />
      <Testimonals />
      <ProductSlider
        title="Daily Best Sells"
        subTitle="Pure. Natural. Safe. Hygiene You Can Trust."
        textAlignCenter={true}
        productList={productlist}
      />
      <BlogSlider/>
      <Faq />
      <Footer />
      
      <FooterNav selectedItem="Home"/>
    </>
  );
}
