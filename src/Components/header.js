import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthContext, useAuthContextAPI } from "../context/AuthContext";
import { themeChange } from 'theme-change'
import { createDropdown } from "../hooks/list";
//import { DynamicDropdownForm } from "../hooks/dynamicDropdown";
//import AccountSelector from "../Dashboard/accountSelect";
//import {CreateDropdown} from "../hooks/list";
const Container = styled.div`
  height: 10vh;
  background: #1c2e42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  h1 {
    padding-left: 20px;
    color: #d1d8e0;
  }

  .signout {
    padding-right: 20px;
    color: #e0d5d1;
    cursor: pointer;
  }
`;

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


const Header = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, []);
  const { token } = useAuthContext();
  const { onSetToken } = useAuthContextAPI();
  
  const onSignOut = () => {
    window.google.accounts.oauth2.revoke(token, () => {
      onSetToken("");
    });
  };

  


  return (
    
    <Container>
      <h2>Analytics Dashboard</h2>
      <div id="AccountsDropdown"> {/* This is where the dropdown will be created dynamically */}
      
    </div>
      <div className="signout" onClick={onSignOut}>
        SIGN OUT
      </div>
      
    </Container>
    
  );
  
  };

export default Header;