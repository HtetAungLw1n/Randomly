import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-luxRed text-white w-full fixed">
      <div className="container mx-auto py-4 flex justify-between items-center px-4 pl-8">
        <div className="text-xl lg:text-3xl">RANDOMLY</div>
        <div className="text-sm lg:text-xl flex lg:gap-4">
          <NavLink to={"/"} className="px-4 py-2">
            News
          </NavLink>
          <NavLink to={"/create-blog"} className="px-4 py-2">
            Create
          </NavLink>
          <NavLink to={"/login"} className="px-4 py-2">
            Login
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
