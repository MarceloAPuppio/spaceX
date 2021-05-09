import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>Space X</header>
      {children}
      <footer>Knowledge powered by Codealo</footer>
    </>
  );
};

export default Layout;
