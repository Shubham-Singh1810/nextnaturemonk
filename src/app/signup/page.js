"use client";

import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const page = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (

    <>
    <Navbar/>
      <div className="signup-page">
        <div className="signup-sections d-flex align-items-center flex-wrap flex-md-nowrap">
          <div className="signup-image d-flex justify-content-center">
            <img src="https://freshcart-next-js.vercel.app/images/svg-graphics/signup-g.svg"></img>
          </div>
          <div className="signup-form">
            <h2> Sign Up to Get Started</h2>
            <form className="d-flex flex-column align-items-center">
                {/* profile input */}
               <div className="signup-div d-flex justify-content-center my-4">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="d-none"
                />
                <div
                  onClick={handleClick}
                  className="rounded-circle border border-success overflow-hidden"
                  style={{
                    width: "90px",
                    height: "90px",
                    cursor: "pointer",
                    transition: "border 0.3s",
                  }}
                >
                  <img
                    src={
                      imageSrc ||
                      "https://cdn-icons-png.flaticon.com/128/552/552721.png"
                    }
                    alt="Profile"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
                

              <div className="signup-div row gx-0 gap-3">
               <div className="col">
                 <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
               </div>
              <div className="col">
                  <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>
              </div>
              <div className="signup-div">
                <input type="email" placeholder="Email" name="email" required />
              </div>
              <div className="signup-div">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>

              <div className="signup-div">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
             

              <button type="submit" className="register">Register</button>
            </form>
            <p className="signup-p">Already have an account? <span className="signin-option fw-bold">Sign in</span></p>
          </div>
        </div>
      </div>
      <Footer/>
    </>

  );
};

export default page;
