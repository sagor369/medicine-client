"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type pageProps = {
  children: React.ReactNode;
};
const ReduxProvider = ({ children }: pageProps) => {
  return (
    <Provider store={store}>
      {children}
      
    </Provider>
  );
};

export default ReduxProvider;
