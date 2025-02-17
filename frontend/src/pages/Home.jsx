import React from "react";
import BreakingNews from "../components/BreakingNews";
import NewsList from "../components/NewsList";

const Home = () => {
  return (
    <section className="container mx-auto pt-[15vh] px-4 lg:px-0">
      <BreakingNews />
      <NewsList />
    </section>
  );
};

export default Home;
