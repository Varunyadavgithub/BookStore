import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[500px]">
          <div className="modal-box border">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg py-2 text-center">SignUp</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-1 border rounded outline-none"
              />
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full px-3 py-1 border rounded outline-none"
              />
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-1 border rounded outline-none"
              />
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                Signup
              </button>
              <p className="text-xl">
                Have Account?{" "}
                <button className="underline text-blue-500 cursor-pointer" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                  Login
                </button>{" "}
                <Login/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
