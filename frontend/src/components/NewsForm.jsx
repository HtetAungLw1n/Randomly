import React from "react";
import { Form } from "react-router-dom";

const NewsForm = () => {
  return (
    <section className="container mx-auto pt-[15vh] px-4 lg:px-0 flex justify-center items-center">
      <div className="bg-offWhite w-full lg:w-1/2 p-5 lg:p-10 shadow-lg shadow-shadowGray">
        <div className="text-3xl text-luxRed font-semibold">Create News</div>
        <Form method="post" className="mt-4">
          <label htmlFor="title" className="block font-lato">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="outline-none border-2 border-charcoalBlack px-4 py-2 w-full mb-6"
          />
          <label htmlFor="image" className="block font-lato">
            Image
          </label>
          <input
            type="url"
            name="image"
            id="image"
            className="outline-none border-2 border-charcoalBlack px-4 py-2 w-full mb-6"
          />
          <label htmlFor="title" className="block font-lato">
            Description
          </label>
          <textarea
            rows={8}
            type="text"
            name="description"
            id="description"
            className="outline-none border-2 border-charcoalBlack px-4 py-2 w-full mb-6"
          />
          <input type="date" name="date" id="date" className="" />
          <button
            type="submit"
            className="float-right px-4 py-2 bg-luxRed text-offWhite font-lato"
          >
            Create
          </button>
        </Form>
      </div>
    </section>
  );
};

export default NewsForm;
