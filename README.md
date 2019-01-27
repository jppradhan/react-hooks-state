# react-hooks-state
React state management hooks

Implemented state management using `React useReducer` and `context` api

## Note
Required react version `16.8.0-alpha.0`

## Install
`npm install react-hooks-state`

## Example
```
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "react-hooks-state";

const INCREMENT = "INCREMENT";

type State = {
  count: number;
};

type Action = {
  type: string;
};

const reducer = (state: State, action: Action) => {
  console.log(state, action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

const { useStore, Provider } = createStore(reducer, {
  count: 0
});

const App: React.SFC = () => {
  const { state, dispatch } = useStore();
  return (
    <div>
      <h2>Welcome to React app</h2>
      <p>Value increased: {state.count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment +</button>
    </div>
  );
};

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
