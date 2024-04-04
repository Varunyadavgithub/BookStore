import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box border">
          <h3 className="font-bold text-lg py-2 text-center">Login</h3>
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
              Login
            </button>
            <p className="text-xl">
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500 cursor-pointer" >
                Signup
              </Link>{" "}
            </p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
