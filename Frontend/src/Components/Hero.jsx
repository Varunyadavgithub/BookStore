import React from "react";
import heroImage from "../../public/hero-image.png";
const Hero = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-14">
            <h1 className="text-4xl font-bold">
              Welcome to BookStore here you learn somthing{" "}
              <span className="text-red-500">New Everyday !!!</span>
            </h1>
            <p className="text-xl font-semibold">
              BookStore! Here, you'll find lots of books to explore. Every day,
              there's something new to discover. Whether you love reading or
              just want to learn something new, you're in the right place. Come
              join us on this exciting journey through the world of books!
            </p>
            <hr />
          </div>
        </div>

        <div className="order-1 w-full md:w-1/2">
          <div className="mt-12 md:mt-30 flex justify-end">
            <img
              src={heroImage}
              className="rounded-t-lg rounded-b-lg w-82 h-82"
              alt="hero-Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
