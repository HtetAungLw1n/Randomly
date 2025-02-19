import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/solid";

const BreakingNews = ({ breakingNews }) => {
  const { id, image, title, description, date } = breakingNews;
  return (
    <>
      {/* breaking new section  */}
      <div className="bg-offWhite h-[55vh] flex flex-col-reverse lg:flex-row justify-between shadow-lg shadow-shadowGray">
        {/* text area  */}
        <div className="px-4 lg:px-8 py-4 lg:w-1/2 flex flex-col justify-between">
          <div>
            {/* content  */}
            <div className="text-luxRed">Breaking News</div>
            <div className="text-xl lg:text-3xl font-bold mt-0 lg:mt-4 uppercase">
              {title}
            </div>
            <div className="my-8 hidden lg:block font-lato text-coolGray">
              <p className="line-clamp-6">{description}</p>
            </div>
            <Link
              to={`${id}`}
              className="bg-luxRed text-offWhite px-4 py-3 text-lg hidden lg:inline-block"
            >
              see more
            </Link>
          </div>
          {/* author + date  */}
          <div className="text-coolGray mt-4 lg:mt-0 font-lato text-sm flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            {date}
          </div>
        </div>
        {/* text area  */}

        {/* img area  */}
        <Link to={`${id}`} className="w-full lg:w-1/2 h-full">
          <img src={image} alt="" className="h-full object-cover" />
        </Link>
      </div>
    </>
  );
};

export default BreakingNews;
