import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const LogoutButton = () => {
    const navigate = useNavigate();
    const {setCredentials} = useStateContext();
    const logOut = () => {
      navigate("/");
      setCredentials({email:'', password:''});
    };
  return (
    <div
      className="absolute right-24 top-5 font-poppins font-bold  rounded-3xl h-8 w-20 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white hover:cursor-pointer select-none "
      onClick={logOut}
    >
      <h1 className="">Log out</h1>
    </div>
  );
}

export default LogoutButton
