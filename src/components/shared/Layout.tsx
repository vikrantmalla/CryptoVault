import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Provider store={store}>
        <header>
          <NavBar />
        </header>
        {children}
      </Provider>
    </>
  );
};

export default Layout;
