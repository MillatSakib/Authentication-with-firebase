import { useContext, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../AuthProvider";

const Register = () => {
  const [passError, setPassError] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    if (!/[A-Z]/.test(password)) {
      // console.log("There have at least one uppercase!");
      setPassError("There have at least one uppercase!");

      return;
    }
    if (!/[a-z]/.test(password)) {
      // console.log("There have at least one lowercase!");
      setPassError("There have at least one lowercase!");
      return;
    }
    if (!/.*\d{2,}$/.test(password)) {
      // console.log("There have at least two digit at last");
      setPassError("There have at least two digit at last");
      return;
    }
    setPassError("");
    registerUser(email, password);
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>F-Auth - Register</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-[95%] md:w-[70%] lg:w-[50%] xl:w-[35] 2xl:w-[30%] flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Link</span>
                  </label>
                  <input
                    name="imgUrl"
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div
                  className={
                    passError ? "text-red-500 text-xs ml-1 mt-2" : "hidden"
                  }
                >
                  {passError}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p className=" py-4 text-green-600">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    className="hover:underline text-blue-600 font-bold"
                  >
                    Login Now
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

export default Register;
