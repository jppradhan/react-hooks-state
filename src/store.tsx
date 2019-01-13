import React, { createContext, ReactNode, useReducer, useContext } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface CreateStore {
  Provider: any;
  useStore: () => UserStore;
}

interface UserStore {
  state: any;
  dispatch: React.Dispatch<any>;
}

export const createStore = (reducers: any, initialState: any): CreateStore => {
  const context = createContext({
    state: {},
    dispatch: (() => {}) as React.Dispatch<{}>
  });

  const Provider: React.SFC<ProviderProps> = props => {
    const [state, dispatch] = useReducer(reducers, initialState);
    const value = { state, dispatch };
    return <context.Provider value={value}>{props.children}</context.Provider>;
  };

  const useStore = (): UserStore => {
    return useContext(context);
  };

  return {
    Provider,
    useStore
  };
};
