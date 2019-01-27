var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { createContext, useReducer, useContext } from "react";
export var createStore = function (reducers, initialState) {
    var context = createContext({
        state: {},
        dispatch: (function () { })
    });
    var Provider = function (props) {
        var _a = __read(useReducer(reducers, initialState), 2), state = _a[0], dispatch = _a[1];
        var value = { state: state, dispatch: dispatch };
        return React.createElement(context.Provider, { value: value }, props.children);
    };
    var useStore = function () {
        return useContext(context);
    };
    return {
        Provider: Provider,
        useStore: useStore
    };
};
