import React from "react";
import { Link } from "react-router-dom";

const BreakingNews = ({ breakingNews }) => {
  const { image, title, description, date } = breakingNews;
  return (
    <>
      {/* breaking new section  */}
      <div className="bg-offWhite flex flex-col-reverse lg:flex-row justify-between shadow-lg shadow-shadowGray">
        {/* text area  */}
        <div className="px-4 lg:px-8 py-4 lg:w-1/2 flex flex-col justify-between">
          <div>
            {/* content  */}
            <div className="text-luxRed">Breaking News</div>
            <div className="text-3xl font-semibold mt-0 lg:mt-4 uppercase">
              {title}
            </div>
            <div className="my-8 hidden lg:block font-lato text-coolGray">
              <p className="line-clamp-6">{description}</p>
            </div>
            <Link
              to={""}
              className="bg-luxRed text-offWhite px-4 py-3 text-lg hidden lg:inline-block"
            >
              see more
            </Link>
          </div>
          {/* author + date  */}
          <div className="text-coolGray mt-4 lg:mt-0 font-lato text-sm">
            {date}
          </div>
        </div>
        {/* text area  */}

        {/* img area  */}
        <img src={image} alt="" className="w-full lg:w-1/2" />
      </div>
    </>
  );
};

export default BreakingNews;
