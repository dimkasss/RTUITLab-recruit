import { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-full p-3 lg:w-1/2 bg-[--bg]">
          <Outlet />
        </div>
      </div>
    </>

  );
};

export default Layout;
