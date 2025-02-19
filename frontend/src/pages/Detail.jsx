import React from "react";
import { redirect, useRouteLoaderData } from "react-router-dom";
import NewsDetail from "../components/NewsDetail";
import { getToken } from "../ulti/auth";

const Detail = () => {
  const data = useRouteLoaderData("news-detail");

  return (
    <section className="container mx-auto pt-[15vh] pb-20 px-4 lg:px-0 flex justify-center items-center">
      {data ? <NewsDetail data={data} /> : <p>no</p>}
    </section>
  );
};

export default Detail;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);

  if (!response.ok) {
    throw new Response("Failed to get News detail", {
      status: response.status,
    });
  }

  const data = await response.json();

  return data.post;
};

//this is delete action
export const action = async ({ request, params }) => {
  const token = getToken();
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw new Response("Deleting Failed", {
      status: response.status,
    });
  }

  return redirect("/");
};
