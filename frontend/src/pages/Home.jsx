import React from "react";
import BreakingNews from "../components/BreakingNews";
import NewsList from "../components/NewsList";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const data = useLoaderData();

  const breakingNews = data.length > 0 ? data[0] : null;
  const regularNews = data.length > 1 ? data.slice(1) : [];

  return (
    <section>
      <div className="container mx-auto pt-[15vh] px-4 lg:px-0">
        <BreakingNews breakingNews={breakingNews} />
        <NewsList regularNews={regularNews} />
      </div>
      <Footer />
    </section>
  );
};

export default Home;

export const loader = async () => {
  const response = await fetch(`${import.meta.env.VITE_APP_DOMAIN}/posts`);

  if (!response.ok) {
    throw new Response("Failed to fetch News", { status: response.status });
  }

  const data = await response.json();

  return data.posts;
};
