"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const router = useRouter();

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    const otpData = {
      email: "demo@email.com", // use sessionStorage or props to get real email
      otp: otpValue,
    };
    console.log('OTP Data:', otpData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="bg-white p-4 shadow otp-box">
        <h1 className="text-center mb-3">OTP Verification</h1>
        <p className="text-center text-muted">Enter the OTP sent to your registered email</p>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3 p-3">
          <div className="d-flex gap-2 justify-content-center my-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                className="form-control text-center otp-input"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                autoComplete="off"
              />
            ))}
          </div>
          <button type="submit" className="otp-submit text-white">Verify & Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default page;
