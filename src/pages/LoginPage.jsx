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
  FacebookAuthProvider,
} from "firebase/auth";
import {auth} from "../Firebase/firebase";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
  const {setuserEmail} = useStateContext();
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

        navigate("/");
        toast.success("Login Successful");


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error('Incorrect email or password');
      
        


        console.log(error);
      });
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
        toast.success("Login Successful");

      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        toast.error(`Error: ${error.message}`);

      });
  };

  const facebookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        
        navigate("/");
        toast.success('Login Successful');
      })
      .catch((error) => { 
       const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error.message);
        toast.error(`Error: ${error.message}`);


      });
  };
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
                to="/signup"
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

            <div className="flex justify-end items-center">
              
              <Link
                to={"/login"}
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
        <Toaster/>
      </div>
    </div>
  );
};

export default LoginPage;
