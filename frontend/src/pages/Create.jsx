import React from "react";
import NewsForm from "../components/NewsForm";

const Create = () => {
  return (
    <section className="container mx-auto pt-[15vh] px-4 lg:px-0 flex justify-center items-center">
      <NewsForm header={"Create"} btnText={"Create"} method={"post"} />
    </section>
  );
};

export default Create;
