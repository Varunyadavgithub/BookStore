import React from "react";
import heroImage from "../../public/hero-image.png";
const Hero = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome to BookStore here you learn somthing{" "}
              <span className="text-red-500">New Everyday !!!</span>
            </h1>
            <p className="text-xl font-semibold">
              BookStore! Here, you'll find lots of books to explore.
              Every day, there's something new to discover. Whether you love
              reading or just want to learn something new, you're in the right
              place. Come join us on this exciting journey through the world of
              books!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 rounded-md btn-primary">Secondary</button>
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
