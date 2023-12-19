import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/Global";

import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ErrorBoundary>
);
