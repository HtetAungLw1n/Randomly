import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <Link
      to={"/newsDetail?id"}
      className="bg-offWhite w-full h-96 shadow shadow-shadowGray"
    >
      <img
        src="https://lobopopart.com.br/wp-content/uploads/2020/06/Arte-Abstrata.jpg"
        alt=""
        className="h-2/3 w-full object-cover"
      />
      <div className="h-1/3 px-4 p-2 flex flex-col justify-evenly">
        <div className="text-luxRed text-sm font-lato">16/2/2025</div>
        <div className="font-semibold line-clamp-3 text-balance">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          recusandae rerum veniam minima Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nam recusandae rerum veniam minima
        </div>
      </div>
    </Link>
  );
};

export default News;
