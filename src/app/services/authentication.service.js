import axios from "axios";

import { BASE_URL } from ".././utils/apibaseurlConfiguration";



// export const signUp = async (formData) => {
//   try {
//     const response = await axios.post(BASE_URL + "user/sign-up" , formData);
//       console.log("Signup Success:", response.data);
//     return response.data;
    
//   } catch (error) {
//     console.error("Signup Error:", error);
//     throw error; 
//   }
// };

// sign up api

export const signUp = async (formData) => {
  try {
    const response = await axios.post(
      BASE_URL + "user/sign-up",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
};

