import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[500px] flex items-center justify-center">
          <div className="modal-box border">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg py-2 text-center">SignUp</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-1 border rounded outline-none"
                  {...register("name",{required: 'Name is required'})}
                />
                <br />
                {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full px-3 py-1 border rounded outline-none"
                  {...register("email", { required: 'Email is required', pattern:{value:/\S+@\S+\.\S+/,message:'Email is invalid'}})}
                />
                <br />
               {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-1 border rounded outline-none"
                  {...register("password", { required: 'Password is required', minLength:{value:6,message:'Password must be 6 digits'} })}
                />
                 <br />
               {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 text-white rounded-md px-2 py-1 md:px-3 md:py-1 hover:bg-blue-700 duration-200">
                  Signup
                </button>
                <p className="text-sm md:text-xl">
                  Have Account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
