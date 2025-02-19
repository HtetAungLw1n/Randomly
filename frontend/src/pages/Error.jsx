import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="bg-luxRed h-screen relative flex justify-center items-center">
      <div className="text-offWhite text-[35vw] absolute top-40 lg:top-0 z-0">
        {error.status || "Error"}
      </div>
      <div className="absolute top-28 text-offWhite">
        {error.statusText ? error.statusText : error.data}
      </div>
      <Link
        to={"/"}
        className="bg-luxRed text-xl z-10 text-offWhite uppercase font-lato font-semibold px-8 py-2"
      >
        go back to home page
      </Link>
    </section>
  );
};

export default Error;
