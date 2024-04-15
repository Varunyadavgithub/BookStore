import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl md:pt-12 font-bold">Welcome to <span className="text-red-700">BookStore !</span></h1>
          <p className="text-xl py-8 md:py-12  md:px-12">
            BookStore is an online platform
            dedicated to providing readers with access to a diverse collection
            of books. Our mission is to make the joy of reading accessible to
            everyone, regardless of their location or background. Founded with a
            passion for literature, BookStore strives to connect readers with
            their favorite books and authors. From timeless classics to
            contemporary bestsellers, our platform offers something for every
            reader. At BookStore, we believe in the power of storytelling to
            inspire, educate, and entertain. Our team is committed to creating a
            seamless and enjoyable reading experience for our users. <span className="text-green-700">Thank you
            for choosing BookStore as your destination for all things literary.</span>
          </p>
          <h1 className="text-xl font-semibold p-8">Happy reading !</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
