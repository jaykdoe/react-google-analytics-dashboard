import { createContext, useContext, useReducer, useMemo } from "react";

const AuthContext = createContext(undefined);
const AuthAPIContext = createContext(() => undefined);
//const RefreshContext = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "initClient":
      return { ...state, client: action.client };
    case "setToken":
      return { ...state, token: action.token };
    // case "setRefreshToken":
    //   return { ...state, token: action.refresh_token };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const api = useMemo(() => {
    const onInitClient = (client) => {
      dispatch({ type: "initClient", client });
    };

    const onSetToken = (token) => {
      dispatch({ type: "setToken", token });
    };

    // const onSetRefreshToken = (refresh_token) => {
    //   dispatch({ type: "refresh_Token", refresh_token });
    // };

    return {
      onInitClient,
      onSetToken,
      //onSetRefreshToken,
    };
  }, []);

  return (
    <AuthAPIContext.Provider value={api}>
      <AuthContext.Provider value={state}>
      
        {children}
      
      </AuthContext.Provider>
    </AuthAPIContext.Provider>
  );
};

const useAuthContext = () => {
  const accessToken = useContext(AuthContext);
  if (typeof accessToken === "undefined") {
    throw new Error("useAuthContext must be used within a AuthContext");
  }
  return accessToken;
};

const useAuthContextAPI = () => {
  const authContextPI = useContext(AuthAPIContext);
  if (typeof authContextPI === "undefined") {
    throw new Error("useAuthContextPI must be used within a AuthAPIContext");
  }
  return authContextPI;
};

// const useRefreshContext = () => {
//   const refresh_Token = useContext(RefreshContext);
//   if (typeof refresh_Token === "undefined") {
//     throw new Error("useRefreshContext must be used within a RefreshContext");
//   }
//   return refresh_Token;
// };

export { AuthContextProvider, useAuthContext, useAuthContextAPI };
