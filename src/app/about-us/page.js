"use client";

import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";

const page = () => {
  const infoArr = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/33/33308.png",
      title: "Who we are",
      subtitle:
        "We are passionate and innovative makhana brand dedicated to providing delicious and nutritious snacking options. We pride ourselves on offering a diverse range of raw and roasted flavored makhana snacks that cater to various tastes and preferences.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/2006/2006789.png",
      title: "Our mission",
      subtitle:
        "Our mission is to redefine snacking by offering high-quality, healthy, and flavorful makhana products. We are committed to providing our customers with delicious, guilt-free snacking options while promoting the nutritional benefits of makhana.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/11495/11495248.png",
      title: "Achivements",
      subtitle:
        "We are a leader in the makhana industry, known for our commitment to quality, innovation, and customer satisfaction. Our range of raw and roasted flavored makhana snacks has garnered praise for their unique flavors, freshness, and nutritional value.",
    },
  ];
  return (
    <>
      <Navbar selectedItem="About" />
      <div>
        <img style={{width:"100%", height:"250px", objectFit:"center"}} src="data:image/jpeg;base64,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" />
      </div>
      <div className="container aboutMain">
        <div className="row my-md-5 my-2 mx-0 mx-md-2">
          <div className="col-md-6 mt-auto col-12 ">
            <h1>Discover the Story Behind Our Nutritious Makhana Brand</h1>
            <p>
              Our journey began when our founders, inspired by their love for
              traditional Indian dishes and their desire to create healthier
              alternatives, set out to explore innovative ways to showcase the
              versatility of makhana. After countless hours spent researching,
              testing, and refining recipes, they developed a line of
              mouthwateringly delicious makhana snacks that would appeal to
              people of all ages and dietary preferences.Today, we are proudly
              recognized as a leader in the makhana industry, offering a wide
              array of raw, roasted, and flavored makhana snacks that cater to
              diverse tastes and cravings. From classic salted varieties to
              exotic combinations such as cheese, caramel, and chocolate,
              there’s something for everyone in our extensive collection. And
              because we understand the importance of maintaining high standards
              throughout the entire production process, we source only the
              finest quality ingredients and utilize sustainable practices
              whenever possible.Join us on our mission to redefine snacking and
              discover the endless possibilities offered by nature’s most
              underrated superfood – makhana! Try our delectable creations today
              and taste the difference for yourself. You won’t regret it!
            </p>
          </div>
          <div className="col-md-6 mt-auto col-12 ">
            <img
              src="https://gustosafoods.com/wp-content/uploads/2024/03/Gustosa-Foods-Office-3-min.jpg"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row">
          {infoArr?.map((v, i) => {
            return (
              <div className="col-md-4 col-12 " key={i}>
                <div className="aboutMissionCard border p-2 shadow mb-2">
                  <img src={v?.img} className="img-fluid" />
                  <h3>{v?.title}</h3>
                  <p>{v?.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-5">
          <h4 className="text-center mb-4 text-secondary"><u>Our Gallery</u></h4>
          <div className="row">
            {[1, 2, 3, 4, 5, 6]?.map((v, i) => {
              return (
                <div className="col-md-4 col-12 mb-md-4 mb-2">
                  <img
                    className="img-fluid"
                    src="https://gustosafoods.com/wp-content/uploads/2024/03/Gustosa-Foods-Office-3-min.jpg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
