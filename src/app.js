var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "../index";
var INCREMENT = "INCREMENT";
var reducer = function (state, action) {
    console.log(state, action);
    switch (action.type) {
        case INCREMENT:
            return __assign({}, state, { count: state.count + 1 });
        default:
            return state;
    }
};
var _a = createStore(reducer, {
    count: 0
}), useStore = _a.useStore, Provider = _a.Provider;
var App = function () {
    var _a = useStore(), state = _a.state, dispatch = _a.dispatch;
    return (React.createElement("div", null,
        React.createElement("h2", null, "Welcome to React app"),
        React.createElement("p", null,
            "Value increased: ",
            state.count),
        React.createElement("button", { onClick: function () { return dispatch({ type: INCREMENT }); } }, "Increment +")));
};
ReactDOM.render(React.createElement(Provider, null,
    React.createElement(App, null)), document.getElementById("root"));
