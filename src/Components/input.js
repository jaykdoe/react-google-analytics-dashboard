import React, { useState } from "react";
import styled from "styled-components";
import { FaRegQuestionCircle } from "react-icons/fa";
//import AccountSelector from "../Dashboard/accountSelect";
import { createDropdown } from "../hooks/list"
//import { useAuthContext } from "../context/AuthContext";
//import fetchAnalyticsAccounts from "../hooks/fetchAccounts";
//import { DynamicDropdownForm } from "../hooks/dynamicDropdown";

const InputField = ({ submitViewId }) => {
  const [viewID, setViewID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitViewId(viewID);
  };
 // const { accessToken } = useAuthContext();
  //const AccountsList = fetchAnalyticsAccounts(accessToken);
// Function to get accounts from localStorage
// Function to get accounts from localStorage
// Function to get accounts from localStorage

 // Assuming there is an element with id "dropdown-container" where the dropdown should be appended
 const getAccountsFromLocalStorage = () => {
  const localStorageData = localStorage.getItem("AnalyticsAccounts");
  if (localStorageData) {
    const parsedData = JSON.parse(localStorageData);
    return parsedData.data.accounts;  // Extract the accounts from the "data" key
  }
  return [];
};
const [selectedValue, setSelectedValue] = useState('');
const handleOptionClick = (option) => {
  setSelectedValue(option);
};

const accountData = getAccountsFromLocalStorage();
createDropdown(accountData, "AccountsDropdown"); 

  return (

    <main class="w-screen h-screen bg-primary p-2 text-white flex items-center justify-center">
    <>
    <InputRow>
    
    
      <form>
      <div id="AccountsDropdown" onClick={handleOptionClick}> </div>


  
 

      
        <input
        class="my-[50px] w-[400px]"
          type="text"
          name="viewid"
           value={viewID}
          //value={selectedValue}
          onChange={(e) => setViewID(e.target.value)}
          placeholder="Enter Property ID"
        />
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        <a
          href="https://stackoverflow.com/questions/36898103/what-is-a-viewid-in-google-analytics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegQuestionCircle />
        </a>
       
      </form>
    </InputRow></>
    </main>
  );
};

export default InputField;

const InputRow = styled.div`
  padding-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;

  input {
    line-height: 7vh;
    border-radius: 20px;
    border: 1px solid #4b2f57;
    font-size: 1.5rem;
    width: 15vw;
  }

  button {
    margin: 0 7px 0 20px;
    height: 7vh;
    border-radius: 20px;
    border: 1px solid #4b2f57;
    font-size: 1.5rem;
    background-color: #1c2e42;
    color: #d1d8e0;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
  }
`;
