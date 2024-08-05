import React from "react";
import Nav from "../../components/nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
