import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";
const AuthContext = {};
const Login = () => {
  //   const { signInUser } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     console.log(email, password);

  //     signInUser(email, password)
  //       .then((result) => {
  //         console.log(result);
  //         e.target.reset();
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  return (
    <HelmetProvider>
      <Helmet>
        <title>F-Auth - Login</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-[95%] md:w-[70%] lg:w-[50%] xl:w-[35] 2xl:w-[30%] flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />

                  <button
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    <label className="label text-red-500 font-bold hover:cursor-pointer hover:underline mt-1 active:text-red-700">
                      Forgot password?
                    </label>
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <h3 className="font-bold text-lg">
                        Input your Email Here!
                      </h3>
                      <p className="mt-4 flex items-center gap-3">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                          </svg>
                          <input
                            type="text"
                            className="grow"
                            placeholder="Email"
                            name="forgotEmail"
                          />
                        </label>
                        <button className="btn my-10 btn-success text-white">
                          Submit
                        </button>
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn btn-error text-white">
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="form-control mt-1">
                  <input type="submit" className="btn btn-primary"></input>
                </div>
                <p className=" py-4 text-green-600">
                  New in this site?{" "}
                  <NavLink
                    to="/register"
                    className="hover:underline text-blue-600 font-bold"
                  >
                    Register Now
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;
