import React from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";
import { getToken } from "../ulti/auth";

const NewsForm = ({ header, btnText, oldNewsData, method }) => {
  const data = useActionData(); //this code will work if error 422 occur

  return (
    <div className="bg-offWhite w-full lg:w-1/2 p-5 lg:p-10 shadow-lg shadow-shadowGray">
      <div className="text-3xl text-luxRed font-semibold flex justify-between">
        {header} News
        {/* this arrow icon appear when form is edit  */}
        {oldNewsData && oldNewsData.id && (
          <Link to={`/${oldNewsData.id}`}>
            <ArrowUturnLeftIcon className="w-5 text-coolGray" />
          </Link>
        )}
      </div>
      <Form method={method} className="mt-4">
        <label htmlFor="title" className="block font-lato">
          Title
        </label>
        {data && data.errors && (
          <p className="text-luxRed text-xs font-lato">{data.errors.title}</p>
        )}
        <input
          type="text"
          name="title"
          id="title"
          className="outline-none border-2 border-charcoalBlack px-4 py-2 w-full mb-6"
          defaultValue={oldNewsData ? oldNewsData.title : ""}
        />
        <label htmlFor="image" className="block font-lato">
          Image
        </label>
        {data && data.errors && (
          <p className="text-luxRed text-xs font-lato">{data.errors.image}</p>
        )}
        <input
          type="url"
          name="image"
          id="image"
          className="outline-none border-2 border-charcoalBlack px-4 py-2 w-full mb-6"
          defaultValue={oldNewsData ? oldNewsData.image : ""}
        />
        <label htmlFor="title" className="block font-lato">
          Description
        </label>
        {data && data.errors && (
          <p className="text-luxRed text-xs font-lato">
            {data.errors.description}
          </p>
        )}
        <textarea
          rows={8}
          type="text"
          name="description"
          id="description"
          className="outline-none border-2 border-charcoalBlack px-4 py-2 w-full mb-6"
          defaultValue={oldNewsData ? oldNewsData.description : ""}
        />
        {data && data.errors && (
          <p className="text-luxRed text-xs font-lato">{data.errors.date}</p>
        )}
        <input
          type="date"
          name="date"
          id="date"
          defaultValue={oldNewsData ? oldNewsData.date : ""}
        />
        <button
          type="submit"
          className="float-right px-4 py-2 bg-luxRed text-offWhite font-lato cursor-pointer"
        >
          {btnText}
        </button>
      </Form>
    </div>
  );
};

export default NewsForm;

// create action and edit action
export const action = async ({ request, params }) => {
  const formData = await request.formData();

  const method = request.method; //get whot method form use

  const token = getToken(); // localStorage ka token ko yu

  const newsData = {
    id: uuid(),
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
    date: formData.get("date"),
  };

  let url = `${import.meta.env.VITE_APP_DOMAIN}/posts`;

  if (method === "PATCH") {
    const id = params.id;
    url = `${import.meta.env.VITE_APP_DOMAIN}/posts/${id}`;
  }

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(newsData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response("Failed to create News", { status: response.status });
  }

  return redirect("/");
};
