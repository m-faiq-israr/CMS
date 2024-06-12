import React from 'react'
import InputField from '../components/InputField';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from "../context/ContextProvider";

const SignUpPage = () => {
    const { onChange, credentials } = useStateContext();

    const navigate = useNavigate();
     const handleSubmit = () => {
      localStorage.setItem('credentials', JSON.stringify(credentials));
       navigate("/admin");
     };
   return (
     <div className="  bg-indigo-100 dark:bg-gray-800 py-6 sm:py-8 lg:py-12 bg-cover h-screen ">
       <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
         <h2 className="mb-4 text-center text-2xl font-bold text-gray-700 dark:text-white md:mb-10  font-poppins mt-10">
           Create an Account
         </h2>

         <form
           className="mx-auto max-w-md rounded-3xl border dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 overflow-hidden"
           onSubmit={handleSubmit}
         >
           <div className="flex flex-col gap-8 p-10">
             
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

             <button className=" rounded-3xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white outline-none   hover:bg-blue-700 focus-visible:ring  md:text-base font-poppins mt-3 w-44  self-center">
               Signup
             </button>
           </div>

           <div className="flex items-center justify-center bg-white dark:bg-gray-600 p-4">
             <p className="text-center text-sm text-gray-600 dark:text-white font-poppins ">
               Already have an account?{" "}
               <Link
                 to="/"
                 className="text-indigo-500 dark:text-indigo-300 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
               >
                 Login
               </Link>
             </p>
           </div>
         </form>
       </div>
     </div>
   );
}

export default SignUpPage
