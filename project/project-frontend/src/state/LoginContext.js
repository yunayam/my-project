import { createContext, useReducer } from "react";
import LoginReducer from "./LoginReducer";

const initialState = {
    user:null,
    isFetching:false,
    error: false,
};

export const LoginContext = createContext(initialState);

export const LoginContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(LoginReducer, initialState);
    return (
        <LoginContext.Provider
          value={{
            user:state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
          >
            {children}
          </LoginContext.Provider>
    )
};