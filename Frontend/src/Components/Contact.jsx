import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center flex justify-center text-center">
          <div className="border-solid border-2 border-black rounded-md w-1/2">
            <h1 className="text-2xl font-semibold md:text-4xl">Contact Us</h1>
            <form>
                <div className="mt-4 space-y-2">
                    <span>Name:</span>
                    <input type="text" placeholder="Enter your name"/>
                </div>
                <div className="mt-4 space-y-2">
                    <span>Email:</span>
                    <input type="email" placeholder="Enter your email"/>
                </div>
                <div className="mt-4 space-y-2">
                    <span>Message:</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
