import React from "react";
import NewsForm from "../components/NewsForm";
import { useRouteLoaderData } from "react-router-dom";

const Edit = () => {
  const oldNewsData = useRouteLoaderData("news-detail");
  return (
    <section className="container mx-auto pt-[15vh] px-4 lg:px-0 flex justify-center items-center">
      <NewsForm
        header={"Edit"}
        btnText={"Edit"}
        oldNewsData={oldNewsData}
        method={"PATCH"}
      />
    </section>
  );
};

export default Edit;
