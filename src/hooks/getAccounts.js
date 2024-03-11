// import { AuthContextProvider, useAuthContext, useAuthContextAPI} from "../context/AuthContext";
// import { format } from "date-fns";
// import { useCallback } from "react";
// import  setState  from "react";

// function ListAccounts() {
//     const { token } = useAuthContext();
//    const fetchAccountData = useCallback(
//     async (props) => {
//        const {
//          name,
//          createTime,
//          updateTime,
//          displayName,
//          regionCode,
//             deleted,
//            nextPageToken
//        } = props;
//        const resp = await fetch(
//          "https://analyticsadmin.googleapis.com/v1beta/accounts?pageSize=1&showDeleted=true&key=" + {token} +"",
//          {
//            method: "GET",
//            headers: {
//              Authorization: `Bearer ${token}`,
//            },
//            body: JSON.stringify({
//              account: [
//                {
//                  name: name,
//                  createTime: format(new Date(createTime), "yyyy-MM-dd"),
//                  updateTime: format(new Date(updateTime), "yyyy-MM-dd"),
//                  displayName: displayName,
//                  regionCode: regionCode,
//                     deleted: deleted,
//                nextPageToken: nextPageToken,
//                },
//              ],
//            }),
//          }
//        );
//        const accountData = await resp.json();

//        if (accountData.error) {
//          return accountData.error;
//        }

//        return accountData;
//      },
//      [token],
     
//    );
//    // eslint-disable-next-line no-undef
//    const listItems = accountData.map(name => <li>{name}</li>)
//   return listItems
   
// };


//   export default ListAccounts;