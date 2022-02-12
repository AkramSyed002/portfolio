import React from "react";
import SideBar, { Main } from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "2" }}>
        <SideBar />
      </div>

      <div
        style={{
          flex: "10",
          backgroundColor: "black",
          // background: `rgb(165,165,166)`,
          background: `radial-gradient(circle, rgba(165,165,166,1) 0%, rgba(13,13,13,1) 70%, rgba(13,13,13,1) 100%)`,
          color: "white",
          height: "100vh",
          paddingTop: "0.5em",
          paddingLeft: "1.5em",
          // border: "1px solid white",
          // borderRadius: "5px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
