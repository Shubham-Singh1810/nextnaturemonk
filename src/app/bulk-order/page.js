

"use client";

import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { bulkOrder } from "../services/support.service";

const BulkOrderPage = () => {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
       try {
         const res = await bulkOrder(formData);
         console.log("Message sent successfully!");
         setFormData({
           firstName: "",
    lastName: "",
    contact: "",
    message: "",
    file: null,
         });
       } catch (err) {
         console.error(err);
       }
  };

  return (
    <>
      <Navbar />
      <div className="bulk-order-page">
        <div className="text-center mb-5">
          <h1>Bulk Orders</h1>
        </div>

        <div className="bulk-all-sections d-flex justify-content-center align-items-center">
          <div className="bulk-section">
            <div className="bulk-content">
              <div>
                <h3 className="mb-2">
                  Order Makhana in Bulk – Premium Quality for Every Occasion
                </h3>
                <p>
                  Just fill in your details and requirements below — our team
                  will get back to you within 24 hours with pricing and options
                  tailored to your needs.
                </p>
              </div>
              <img src="/assets/bulk3.png" className="img-fluid" />
            </div>
          </div>

          <div className="bulk-form d-flex flex-column align-items-center">
            <form onSubmit={handleSubmit}>
              <h2 className="mb-4">Place Your Bulk Makhana Order</h2>

              {/* First & Last Name */}
              <div className="row mb-2">
                <div className="col">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div className="mb-2">
                <label>Contact Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-2">
                <label>Message / Requirements</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="mb-2">
                <label className="form-label">Add a photo or video</label>
                <div
                  className="form-control"
                  style={{
                    height: "90px",
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #ced4da",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    fileInputRef.current && fileInputRef.current.click()
                  }
                >
                  {formData.file ? formData.file.name : "Drop files here to upload"}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="d-none"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="bulk-btn">
                <i className="bi bi-send-fill me-2"></i> Submit Bulk Request
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BulkOrderPage;


// "use client";

// import React, { useRef, useState } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { bulkOrder } from "../services/support.service";

// const BulkOrderPage = () => {
//   const fileInputRef = useRef(null);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     contact: "",
//     message: "",
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, file }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("firstName", formData.firstName);
//     data.append("lastName", formData.lastName);
//     data.append("contact", formData.contact);
//     data.append("message", formData.message);
//     if (formData.file) {
//       data.append("file", formData.file);
//     }

//     try {
//       const res = await bulkOrder(data); // sending FormData now
//       console.log("Success:", res);

//       setFormData({
//         firstName: "",
//         lastName: "",
//         contact: "",
//         message: "",
//         file: null,
//       });

//       if (fileInputRef.current) fileInputRef.current.value = "";
//     } catch (err) {
//       console.error("Submission error:", err);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bulk-order-page">
//         <div className="text-center mb-5">
//           <h1>Bulk Orders</h1>
//         </div>

//         <div className="bulk-all-sections d-flex justify-content-center align-items-center">
//           <div className="bulk-section">
//             <div className="bulk-content">
//               <h3 className="mb-2">
//                 Order Makhana in Bulk – Premium Quality for Every Occasion
//               </h3>
//               <p>
//                 Just fill in your details and requirements below — our team will
//                 get back to you within 24 hours with pricing and options tailored
//                 to your needs.
//               </p>
//               <img src="/assets/bulk3.png" className="img-fluid" />
//             </div>
//           </div>

//           <div className="bulk-form d-flex flex-column align-items-center">
//             <form onSubmit={handleSubmit}>
//               <h2 className="mb-4">Place Your Bulk Makhana Order</h2>

//               <div className="row mb-2">
//                 <div className="col">
//                   <label>First Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="col">
//                   <label>Last Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-2">
//                 <label>Contact Number</label>
//                 <input
//                   type="tel"
//                   className="form-control"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label>Message / Requirements</label>
//                 <textarea
//                   className="form-control"
//                   rows="3"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>

//               <div className="mb-2">
//                 <label className="form-label">Add a photo or video</label>
//                 <div
//                   className="form-control"
//                   style={{
//                     height: "90px",
//                     backgroundColor: "#f8f9fa",
//                     border: "1px solid #ced4da",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     fileInputRef.current && fileInputRef.current.click()
//                   }
//                 >
//                   {formData.file ? formData.file.name : "Drop files here to upload"}
//                   <input
//                     type="file"
//                     ref={fileInputRef}
//                     className="d-none"
//                     accept="image/*,video/*"
//                     onChange={handleFileChange}
//                   />
//                 </div>
//               </div>

//               <button type="submit" className="bulk-btn">
//                 <i className="bi bi-send-fill me-2"></i> Submit Bulk Request
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BulkOrderPage;
