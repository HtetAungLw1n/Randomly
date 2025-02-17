import React from "react";
import News from "./News";

const NewsList = () => {
  return (
    <section className="py-24">
      <div>Recent News</div>
      <section className="mt-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8">
        <News />
        <News />
        <News />
        <News />
        <News />
      </section>
    </section>
  );
};

export default NewsList;

export const loader = async () => {};
