import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getExpDuration } from "../ulti/auth";
import Loading from "../loading/Loading";
import Footer from "../components/Footer";

const Main = () => {
  //this is for loading
  const navigation = useNavigation();

  const submit = useSubmit();
  const token = useLoaderData();
  //page run tr nk d code work
  useEffect(() => {
    //token ma shi yin tot br mha ma lok bu
    if (!token) {
      return;
    }

    //token shi yin
    //dr ka token exp pyit twr yin logout lok tr
    if (token === "TOKEN EXP") {
      submit(null, { action: "/logout", method: "POST" });
    }

    // //duration twat pay mk code
    const duration = getExpDuration();
    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, [duration]);
  }, [token, submit]);

  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}

      <Footer />
    </>
  );
};

export default Main;
