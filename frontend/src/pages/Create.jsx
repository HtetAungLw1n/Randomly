import React from "react";
import NewsForm from "../components/NewsForm";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";
import { getToken } from "../ulti/auth";

const Create = () => {
  return (
    <section className="container mx-auto pt-[15vh] px-4 lg:px-0 flex justify-center items-center">
      <NewsForm />
    </section>
  );
};

export default Create;

export const action = async ({ request }) => {
  const formData = await request.formData();

  const token = getToken(); // localStorage ka token ko yu

  const newsData = {
    id: uuid(),
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
    date: formData.get("date"),
  };

  console.log(newsData);

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(newsData),
  });

  if (!response.ok) {
    // error code
  }

  return redirect("/");
};
