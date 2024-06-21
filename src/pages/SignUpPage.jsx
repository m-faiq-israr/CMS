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
import auth from "../Firebase/firebase";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        console.log(errorMessage);
      });
  };
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(credential);
      });
  };

  const facebookLogin = () => {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        navigate("/");

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error.message);

        // ...
      });
  };
  return (
    <div className="  bg-indigo-100 dark:bg-gray-800 h-screen pt-8 font-poppins ">
      <div className={` absolute right-2 top-1 `}>
        <ThemeToggle />
      </div>
      <div className=" ">
        <form
          className="mx-auto max-w-lg pb-5 rounded-3xl border dark:border-gray-600 shadow-md bg-white dark:bg-gray-700 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="px-10 pt-7">
            <h1 className="text-3xl font-bold text-gray-700 dark:text-white">
              Create an account
            </h1>
            <p className=" text-sm text-gray-600 dark:text-gray-200 pl-1 ">
              Already have an account?{" "}
              <Link
                to="/"
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
                className="mb-2 inline-block text-sm text-gray-700 dark:text-white sm:text-base font-semibold font-poppins"
              >
                Email
              </label>
              <InputField
                name={"email"}
                type={"email"}
                placeholder={"admin@example.com"}
                onChange={onChange}
                width={"full"}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm text-gray-700 dark:text-white sm:text-base font-semibold font-poppins "
              >
                Password
              </label>
              <InputField
                name={"password"}
                type={"password"}
                placeholder={"*********"}
                onChange={onChange}
                width={"full"}
              />
            </div>
            <AuthButton name={"Create an account"} />
            <div>
              <Divider />
            </div>
            <div className=" space-y-3">
              <AuthProviderButton
                name={"Continue with Google"}
                icon={<FcGoogle size={"22px"} />}
                color={"bg-gray-200"}
                hoverColor={"bg-gray-300"}
                onClick={googleLogin}
              />
              <AuthProviderButton
                name={"Continue with Facebook"}
                icon={<FaFacebookSquare />}
                color={"bg-blue-500"}
                hoverColor={"bg-blue-600"}
                onClick={facebookLogin}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
