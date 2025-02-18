import {
  XMarkIcon,
  CalendarDaysIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const NewsDetail = ({ data }) => {
  const { image, title, description, date } = data;
  return (
    <>
      <div className="bg-offWhite w-full lg:w-1/2 shadow-lg shadow-shadowGray">
        <div className="py-5">
          <div className="text-xl lg:text-3xl font-bold uppercase px-5 flex items-start gap-2">
            {title}
            <Link to={"/"} className="w-20 text-luxRed">
              <XMarkIcon />
            </Link>
          </div>
          <div className="text-luxRed text-sm my-2 mb-4 px-5 flex items-center gap-2">
            <CalendarIcon className="w-5" />
            {date}
          </div>
          <img src={image} alt="" />
          <div className="text-balance mt-4 px-5">{description}</div>
          <div className="mt-8 text-xl float-right px-5">
            <button className="bg-luxRed text-offWhite px-4 py-2">Edit</button>
            <button className="text-luxRed px-4 py-2">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
