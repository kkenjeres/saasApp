import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth"><div></div>{children}</main>;
};

export default Layout;
