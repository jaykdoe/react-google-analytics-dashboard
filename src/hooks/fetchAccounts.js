// src/utils/analyticsApi.js
import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";



    const API_BASE_URL ="https://analyticsadmin.googleapis.com/v1beta";
const fetchAnalyticsAccounts = async (token) => {
    
  try {
    let token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/accounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    // var accounts = [];
    // accounts[0] = response;
    // localStorage.setItem("AnalyticsAccounts", JSON.stringify(accounts));
    localStorage.AnalyticsAccounts = JSON.stringify(response);
    var storedNames = JSON.parse(localStorage.AnalyticsAccounts);
    console.log("accounts", storedNames)
    return response.data; 
  } 
  catch (error) {
    console.error("Error fetching accounts:", error);
    return null;
  }
};

export default fetchAnalyticsAccounts;