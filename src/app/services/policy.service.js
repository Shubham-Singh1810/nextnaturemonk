import axios from "axios";

import { BASE_URL } from ".././utils/apibaseurlConfiguration";

export const getPolicy = async () => {
  try {
    const response = await axios.get(BASE_URL + "support/details");
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.error("Error fetching polcies:", error);
    throw error; 
  }
};