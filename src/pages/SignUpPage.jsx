import React, { useState } from "react";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import AuthButton from "../AuthButton";
import Divider from "../components/Divider";
import AuthProviderButton from "../components/AuthProviderButton";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ThemeToggle from "../components/ThemeToggle";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

const SignUpPage = () => {
  const { setuserEmail } = useStateContext();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // Clearing confirmPasswordError if user modifies any field
    if (
      confirmPasswordError &&
      (e.target.name === "password" || e.target.name === "confirmPassword")
    ) {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    setError("");
    setConfirmPasswordError("");
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const facebookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="bg-indigo-100 dark:bg-gray-800 h-screen pt-8  font-poppins xs:pt-24">
      <div className="absolute right-2 top-1">
        <ThemeToggle />
      </div>
      <div>
        <form
          className="mx-auto md:max-w-md sm:max-w-md xs:max-w-sm pb-5   rounded-3xl border dark:border-gray-600 shadow-md bg-white dark:bg-gray-700 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="px-10 pt-7">
            <h1 className="text-3xl font-bold text-gray-700 dark:text-white">
              Create an account
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-200 pl-1">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold dark:text-blue-400 transition duration-100 hover:text-blue-700 active:text-indigo-700"
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-4 px-10 py-4">
            <div>

            <label
              htmlFor="email"
              className="mb-1 inline-block text-sm text-gray-700 dark:text-white sm:text-base font-semibold font-poppins"
              >
              Email
            </label>
            <InputField
              name="email"
              type="email"
              placeholder="admin@example.com"
              onChange={onChange}
              width={"full"}
              />
              </div>
              <div>
                
            <label
              htmlFor="password"
              className="mb-1 inline-block text-sm text-gray-700 dark:text-white sm:text-base font-semibold font-poppins"
              >
              Password
            </label>
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
              width={"full"}
              />
              </div>
              <div>

            <label
              htmlFor="confirmPassword"
              className="mb-1 inline-block text-sm text-gray-700 dark:text-white sm:text-base font-semibold font-poppins"
              >
              Confirm Password
            </label>
            <InputField
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={onChange}
              width={"full"}
              />
              </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">
                {confirmPasswordError}
              </p>
            )}
            <AuthButton name="Create an account" />
            <Divider />
            <AuthProviderButton
              name="Continue with Google"
              icon={<FcGoogle size="22px" />}
              color="bg-gray-200"
              hoverColor="bg-gray-300"
              onClick={googleLogin}
            />
            <AuthProviderButton
              name="Continue with Facebook"
              icon={<FaFacebookSquare />}
              color="bg-blue-500"
              hoverColor="bg-blue-600"
              onClick={facebookLogin}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
