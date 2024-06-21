import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useStateContext } from "../context/ContextProvider";
import Divider from "../components/Divider";
import AuthProviderButton from "../components/AuthProviderButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import AuthButton from "../AuthButton";
import ThemeToggle from "../components/ThemeToggle";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from '../firebase'


const LoginPage = () => {

  const navigate = useNavigate();


  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {   
        const user = userCredential.user;
        navigate("/admin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
                navigate("/");

        console.log(error);
      });


    
  };

  const googleLogin = () =>{
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
            navigate("/admin");

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
  }
  return (
    <div className="  bg-indigo-100 dark:bg-gray-800 h-screen pt-8 ">
      <div className={` absolute right-2 top-1 `}>
        <ThemeToggle />
      </div>
      <div className=" ">
        <form
          className="mx-auto max-w-lg rounded-3xl border dark:border-gray-600 shadow-md bg-white dark:bg-gray-700 overflow-hidden font-poppins pb-5"
          onSubmit={handleSubmit}
        >
          <div className="px-10 pt-7">
            <h1 className="text-3xl font-bold text-gray-700 dark:text-white">
              Welcome back
            </h1>
            <p className=" text-sm text-gray-600 dark:text-gray-200 pl-1 ">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold dark:text-blue-400 transition duration-100 hover:text-blue-700 "
              >
                Sign up
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
                className="mb-1 inline-block text-sm text-gray-700 dark:text-white sm:text-base font-semibold font-poppins "
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

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-xl cursor-pointer "
                  id="remember"
                />
                <label
                  className="text-sm font-semibold text-gray-700 cursor-pointer"
                  htmlFor="remember"
                >
                  Remember me
                </label>
              </div>
              <Link
                to={"/"}
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold "
              >
                Forgot password?
              </Link>
            </div>

            <AuthButton name={"Sign in to your account"} />
            <div>
              <Divider />
            </div>
            <div className=" space-y-3">
              <AuthProviderButton
                name={"Sign in with Google"}
                icon={<FcGoogle size={"22px"} />}
                color={"bg-gray-200"}
                hoverColor={"bg-gray-300"}
                onClick={googleLogin}
              />
              <AuthProviderButton
                name={"Sign in with Facebook"}
                icon={<FaFacebookSquare />}
                color={"bg-blue-500"}
                hoverColor={"bg-blue-600"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
