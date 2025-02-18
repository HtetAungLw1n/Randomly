import React from "react";
import AuthForm from "../components/AuthForm";
import { redirect } from "react-router-dom";

const Editor = () => {
  return (
    <section className="container mx-auto pt-[15vh] px-4 lg:px-0 flex justify-center items-center">
      <AuthForm />
    </section>
  );
};

export default Editor;

export const action = async ({ request }) => {
  //url ka ny mode ko yu ml
  const searchParam = new URL(request.url).searchParams;
  const mode = searchParam.get("mode") || "login";

  //this is just for security if user enter with invaild mode
  if (mode !== "login" && mode !== "signup") {
    throw new Error("Invaild URL");
    // dr ko fix om ********
  }

  //dr ka request Form htl ka data
  const data = await request.formData();
  const editorData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editorData),
  });

  // invalid data twy input lok yin tat mk error
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    // code
  }

  //token yuu tar
  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);

  return redirect("/");
};
