// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="text-6xl m-10 text-orange-600 text-center">
        React Router here for users ...
      </h1>
      
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Home;
