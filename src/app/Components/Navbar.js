"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoggedDataContext } from "../context/Context";
import "../globals.css";

const Navbar = ({ selectedItem }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loggedUserData } = useContext(LoggedDataContext);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 🔁 Conditional navigation logic
  const handleProfileClick = () => {
    console.log(loggedUserData);
    if (loggedUserData) {
      router.push("/profile");
    } else {
      router.push("/signup");
    }
  };
  const navArr = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Bulk Order",
      link: "/bulk-order",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about-us",
    },
  ];
  return (
    <>
      <div className="navbar-outer d-flex py-3 justify-content-between align-items-center">
        {/* 🔷 Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/assets/logo.png" alt="logo" className="logo-img" />
          </Link>
        </div>
        <ul
          className={`nav-links list-unstyled mb-0 ${menuOpen ? "open" : ""}`}
        >
          {navArr?.map((v, i) => {
            return (
              <li key={i}>
                <Link
                  href={v?.link}
                  style={{
                    color: selectedItem == v?.name ? "#3D9970" : "#000",
                    opacity: selectedItem == v?.name ? "1" : "0.6",
                    fontWeight: selectedItem == v?.name ? "600" : "400",
                  }}
                >
                  {v?.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-icons d-flex gap-4 align-items-center navRight">
          <img
            src="https://cdn-icons-png.flaticon.com/128/665/665865.png"
            alt="cart-icon"
            className="d-md-block d-none"
          />
          {loggedUserData && loggedUserData.profilePic ? (
            <img
              src={loggedUserData.profilePic}
              alt="user-profile"
              // className="rounded-circle"
              title="Go to Profile"
              onClick={handleProfileClick}
              style={{
                cursor: "pointer",
                objectFit: "cover",
              }}
              className="d-md-block d-none"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
              alt="profile-icon"
              title="Sign Up / Login"
              onClick={handleProfileClick}
              className="d-md-block d-none"
            />
          )}
          <div className="d-flex align-items-center ">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2645/2645890.png"
              alt="notification-icon"
            />
            <div className="notificationDiv">
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
