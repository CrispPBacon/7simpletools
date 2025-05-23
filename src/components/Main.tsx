import React from "react";
import { Outlet } from "react-router-dom";

const Header = React.lazy(() => import("./Header"));
function Main() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      ;
    </>
  );
}

export default Main;
