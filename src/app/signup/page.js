import React from "react";

const page = () => {
  return (
    <>
      <div className="signup-page">
        <div className="signup-sections d-flex">
          <div className="signup-image">
            <img src="https://freshcart-next-js.vercel.app/images/svg-graphics/signup-g.svg"></img>
          </div>
          <div className="signup-form">
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" required />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
