import { XMarkIcon, CalendarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

const NewsDetail = ({ data }) => {
  //button display or not
  const isToken = useRouteLoaderData("root");

  const { image, title, description, date } = data;

  const submit = useSubmit();
  //deleting news
  const newsDeleteHandler = () => {
    const confirmStatus = window.confirm("Are you sure you want to delete !");

    if (confirmStatus) {
      submit(null, { method: "DELETE" });
    }
  };
  return (
    <>
      <div className="bg-offWhite w-full lg:w-1/2 shadow-lg shadow-shadowGray">
        <div className="py-5">
          <div className="px-5 flex items-start justify-between">
            <div className="text-xl lg:text-3xl font-bold uppercase w-4/5 font-lato">
              {title}
            </div>
            <Link to={"/"} className="w-5 text-luxRed">
              <XMarkIcon />
            </Link>
          </div>
          <div className="text-luxRed text-sm my-2 mb-4 px-5 flex items-center gap-2">
            <CalendarIcon className="w-5" />
            {date}
          </div>
          <img src={image} alt="" className="w-full" />
          <div className="text-balance mt-4 px-5">{description}</div>

          {isToken && (
            <div className="mt-8 text-xl float-right px-5">
              <Link
                to={`edit-news`}
                className="bg-luxRed text-offWhite px-4 py-2"
              >
                Edit
              </Link>
              <button
                className="text-luxRed px-4 py-2 cursor-pointer"
                onClick={newsDeleteHandler}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
