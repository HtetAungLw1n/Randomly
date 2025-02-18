import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/solid";

const News = ({ news }) => {
  const { id, image, title, date } = news;
  return (
    <Link
      to={`/news-detail/${id}`}
      className="bg-offWhite w-full h-max shadow-lg shadow-shadowGray hover:shadow-red-100 duration-150 transition"
    >
      <img src={image} alt="" className="h-2/3 w-full object-cover" />
      <div className="h-1/3 px-4 p-2 flex flex-col justify-evenly">
        <div className="text-luxRed text-sm font-lato flex items-center gap-2 my-2">
          <CalendarIcon className="w-5 h-5" />
          {date}
        </div>
        <div className="font-semibold line-clamp-3 text-balance uppercase">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default News;
