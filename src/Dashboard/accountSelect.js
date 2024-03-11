import React from 'react'
import fetchAnalyticsAccounts from "../hooks/fetchAccounts"
import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";

const AccountSelector = () => {
  let token = localStorage.getItem("token")
const fetchData = fetchAnalyticsAccounts(token);
console.log ("fetchdata", fetchData);
const listItems = Array[fetchData];
// const listItems = fetchData.accounts.map((accounts)=>{return JSON.stringify({accounts})});
// console.log ("list", listItems);
// const item= JSON.parse(fetchData[fetchAnalyticsAccounts]);
// this.setItem("accounts", JSON.stringify(fetchData));
// Storage.prototype.setObj = function(key, fetchData) {
//   return this.setItem(key, JSON.stringify(fetchData))
// }
// Storage.prototype.getObj = function(fetchData) {
//   return JSON.parse(this.getItem(fetchData))
// }

// localStorage.setObj("accounts", {fetchAnalyticsAccounts})
// const item=localStorage.getObj("AnalyticsAccounts")
if (listItems){
  
  return (
    <div class="dropdown">
    <button class="dropbtn"></button>
    <div class="dropdown-content">
    <ul><li>{listItems}</li></ul>
    </div>
    </div>
  )
};
console.log("no data")
}

export default AccountSelector;