import React from 'react'
//import fetchAnalyticsAccounts from "../hooks/fetchAccounts"
import axios from "axios";

const API_BASE_URL = "https://analyticsadmin.googleapis.com/v1alpha";
//const API_BASE_URL = "https://analyticsadmin.googleapis.com/v1beta";
const fetchAnalyticsAccounts = async (token) => {
  try {
    // Fetch the accounts
    const response = await axios.get(`${API_BASE_URL}/accounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("successss");
    // Store the accounts in localStorage
    localStorage.AnalyticsAccounts = JSON.stringify(response.data.accounts);
    
    // Return the account data
    return response.data; 
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return null;
  }
};

// ... (previous code)

// Function to create a dropdown list
const createDropdown = (accountData, containerId) => {
    const dropdown = document.createElement("select");
    accountData.forEach((account) => {
      const option = document.createElement("option");
      option.text = account.displayName + " (" + account.name.split("/")[1] + ")";  // Use displayName as the option text
      option.value = account.name.split("/")[1];  // Use the numeric value as the option value
      dropdown.appendChild(option);
    });
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(dropdown); // Append the dropdown to the specified container
    } else {
      // Handle the case where the specified container does not exist
      console.error("Container element not found");
    }
  };
  
  // Usage
  const getAccountsFromLocalStorage = () => {
    const localStorageData = localStorage.getItem("AnalyticsAccounts");
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      return parsedData.data.accounts;  // Extract the accounts from the "data" key
    }
    return [];
  };
  const accountData = getAccountsFromLocalStorage();
  createDropdown(accountData, "AccountsDropdown"); 

  export { fetchAnalyticsAccounts, createDropdown };