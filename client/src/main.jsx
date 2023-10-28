import React from "react";
import ReactDOM from "react-dom/client";
import router from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./api/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
