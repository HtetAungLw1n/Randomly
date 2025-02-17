import React from "react";
import News from "./News";

const NewsList = ({ regularNews }) => {
  return (
    <section className="py-24">
      <div>Recent News</div>
      <section className="mt-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8">
        {regularNews.map((news) => (
          <News key={news.id} news={news} />
        ))}
      </section>
    </section>
  );
};

export default NewsList;
