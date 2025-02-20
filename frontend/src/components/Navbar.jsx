import React from "react";
import { NavLink, useRouteLoaderData } from "react-router-dom";

const Navbar = () => {
  const isToken = useRouteLoaderData("root");

  return (
    <section className="bg-luxRed text-white w-full fixed">
      <div className="container mx-auto py-4 flex justify-between items-center px-4 pl-8">
        <div className="text-xl lg:text-3xl">RANDOMLY</div>
        <div className="text-sm lg:text-xl flex lg:gap-4">
          <NavLink to={"/"} className="px-4 py-2">
            News
          </NavLink>

          {isToken && (
            <NavLink to={"/create-news"} className="px-4 py-2">
              Create
            </NavLink>
          )}

          {!isToken && (
            <NavLink to={"/editor?mode=login"} className="px-4 py-2">
              Editor
            </NavLink>
          )}

          {isToken && (
            <NavLink to={"/logout"} className="px-4 py-2">
              Logout
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
