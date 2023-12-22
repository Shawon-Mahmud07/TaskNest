import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";

const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
