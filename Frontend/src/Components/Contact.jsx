import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-12 items-center flex justify-center text-center">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl font-bold text-center">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">
              We're here for you at BookStore. If you have any questions about
              accessing our books, suggestions to improve our platform, or need
              assistance with anything else, just drop us a message. Your input
              helps us make BookStore better for you. <br />
              <span className="font-semibold">
                Thanks for choosing us!
              </span>
            </p>
            <form class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
