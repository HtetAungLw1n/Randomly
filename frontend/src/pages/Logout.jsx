import { redirect } from "react-router-dom";

export const loader = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expire");
  return redirect("/");
};
