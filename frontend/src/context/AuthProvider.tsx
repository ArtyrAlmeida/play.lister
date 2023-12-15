import React, { useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state:any, action:any) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

const AuthContext = React.createContext<any>({});

const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = AsyncStorage.getItem("@user");

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("Auth Context state: ", state);

  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
  
}


export {AuthContext, authReducer, AuthContextProvider};