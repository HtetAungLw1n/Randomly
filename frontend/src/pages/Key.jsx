import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

const Key = () => {
  const data = useActionData();

  return (
    <section className="container mx-auto pt-[15vh] px-4 lg:px-0 ">
      <div className="bg-offWhite w-full lg:w-1/2 p-5 lg:p-10 shadow-lg shadow-shadowGray mx-auto">
        <Form
          method="post"
          className="flex flex-col justify-center items-center"
        >
          <label htmlFor="key" className="text-luxRed text-xl lg:text-3xl">
            Do you have key to register from HQ ?
          </label>
          <input
            type="text"
            name="key"
            id="key"
            className="mt-10 outline-none border-2 border-charcoalBlack focus:border-luxRed px-2 py-1"
            placeholder="key"
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 cursor-pointer hover:text-luxRed"
          >
            {data ? data : "confirm"}
          </button>
        </Form>
      </div>
    </section>
  );
};

export default Key;

export const action = async ({ request }) => {
  const formData = await request.formData();

  const inputKey = formData.get("key");

  if (inputKey === "hurricane") {
    return redirect("/editor?mode=signup");
  } else {
    return "wrong! try again.";
  }
};
