import React from "react";
interface CreateStore {
    Provider: any;
    useStore: () => UserStore;
}
interface UserStore {
    state: any;
    dispatch: React.Dispatch<any>;
}
export declare const createStore: (reducers: any, initialState: any) => CreateStore;
export {};
