import React from "react";
import { Form, useActionData } from "react-router-dom";

const NewsForm = () => {
  const data = useActionData(); //this code will work if error 422 occur

  return (
    <div className="bg-offWhite w-full lg:w-1/2 p-5 lg:p-10 shadow-lg shadow-shadowGray">
      <div className="text-3xl text-luxRed font-semibold">Create News</div>
      <Form method="post" className="mt-4">
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
        />
        {data && data.errors && (
          <p className="text-luxRed text-xs font-lato">{data.errors.date}</p>
        )}
        <input type="date" name="date" id="date" className="" />
        <button
          type="submit"
          className="float-right px-4 py-2 bg-luxRed text-offWhite font-lato"
        >
          Create
        </button>
      </Form>
    </div>
  );
};

export default NewsForm;
