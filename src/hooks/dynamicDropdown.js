import React, { useState, useEffect } from 'react';
import { createDropdown } from '../hooks/list';


function DynamicDropdownForm() {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // Simulate fetching options from local storage
    const localStorageData = localStorage.getItem("AnalyticsAccounts");
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      const accountData = parsedData.data.accounts;
      createDropdown(accountData, "AccountsDropdown"); // Assuming createDropdown function attaches the dropdown to the specified element
    }
  }, []);

  const handleOptionClick = (option) => {
    setSelectedValue(option);
  }

  return (
    <div id="AccountsDropdown"> {/* This is where the dropdown will be created dynamically */}
      <input type="text" value={selectedValue} onClick={handleOptionClick}/>
    </div>
  );
}

export default DynamicDropdownForm;