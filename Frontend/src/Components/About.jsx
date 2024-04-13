import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1>Hello from About page</h1>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
