import React from "react";
import BreakingNews from "../components/BreakingNews";
import NewsList from "../components/NewsList";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  const breakingNews = data[0];

  const regularNews = data.slice(1);

  return (
    <section className="container mx-auto pt-[15vh] px-4 lg:px-0">
      <BreakingNews breakingNews={breakingNews} />
      <NewsList regularNews={regularNews} />
    </section>
  );
};

export default Home;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if (!response.ok) {
    throw new Response("Failed to fetch News", { status: response.status });
  }

  const data = await response.json();

  return data.posts;
};
