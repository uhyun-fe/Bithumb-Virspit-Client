import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import rootReducer, { rootSaga } from "./modules/rootReducer";

// const sagaMiddleware = createSagaMiddleware();
// const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
   <React.StrictMode>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
   </React.StrictMode>,
   document.getElementById("root")
);
