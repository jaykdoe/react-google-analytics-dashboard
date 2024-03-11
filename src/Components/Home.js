import { useEffect } from "react";
import Dashboard from "../Dashboard/dashboard";
import styled from "styled-components";
import Footer from "./footer";
import { useAuthContext } from "../context/AuthContext";
import { useAuthContextAPI } from "../context/AuthContext";
//import { useRefreshContext } from "../context/AuthContext";
//import { ListAccounts } from "../hooks/getAccounts"
//import fetchAnalyticsAccounts from "../hooks/fetchAccounts";
//import AccountSelector from "../Dashboard/accountSelect";


export default function Home() {
  const { token, client } = useAuthContext();
  const { onInitClient, onSetToken } = useAuthContextAPI();
  //const { onInitRefresh, onSetRefreshToken } = useRefreshContext();

  const onGetToken = () => {
    client.requestAccessToken();
  }
  // const onGetRefreshToken = () => {
  //   client.requestRefreshToken();
  // }
  useEffect(() => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: "https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/webmasters",
      callback: (tokenResponse) => {
        onSetToken(tokenResponse.access_token);
        //onSetRefreshToken(tokenResponse.refresh_token);
      },
    });
    onInitClient(client);
    //onInitRefresh(client);
    
  }, [onInitClient, onSetToken]);
 //const Accounts = fetchAnalyticsAccounts(token);
  // let validation = localStorage.getItem("token");
  // console.log ("token", validation)
  //console.log ("Accounts", Accounts)
  //let isValid = localStorage.getItem("token");
  
  return (
    
    <div className="App">

      {!token ? (
        <>
        {/* <AccountSelector></AccountSelector> */}
          <Title>Google Analytics Dashboard</Title>
          <ButtonContainer>
          <button onClick={onGetToken} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
          <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
          <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
          </svg>
          Sign in with Google
          </button>
           
          </ButtonContainer>
          <Footer />
        </>
      ) : (
        localStorage.setItem("token", token),
        <Dashboard />
      )}
    </div>
  );
}

const ButtonContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  padding-top: 10vmin;
  margin-top: 0;
`;
