import React, { useState } from "react";
import DayVisitsReport from "./dayVisitsReport";
import CountriesReport from "./countriesReport";
import PageviewsReport from "./pageviewReport";
import SourceReport from "./sourceReport";
import BrowsersReport from "./browsersReport";
import DevicesReport from "./devicesReport";
import Header from "../Components/header";
import { LastRow } from "./styles";
import InputField from "../Components/input";
//import AccountSelector from "./accountSelect";

const DashBoard = () => {
  const [viewID, setViewID] = useState(null);
//const accounts = localStorage.key("AnalyticsAccounts", 1)
  return (
    <>
      <Header />
    
      {viewID ? (
        <>
          <DayVisitsReport
            metric={"users"}
            title={"Users"}
            viewID={viewID}
          />
          <DayVisitsReport
            metric={"sessions"}
            title={"Sessions"}
            viewID={viewID}
          />
          <CountriesReport viewID={viewID} />
          <PageviewsReport viewID={viewID} />
          <SourceReport viewID={viewID} />
          <LastRow>
            <BrowsersReport viewID={viewID} />
            <DevicesReport viewID={viewID} />
          </LastRow>
        </>
      ) : (
        <InputField submitViewId={(id) => setViewID(id)} />
      )}
    </>
  );
};

export default DashBoard;
