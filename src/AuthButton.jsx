import React from 'react'

const AuthButton = ({name}) => {
  return (
    <button type='submit' className=" rounded-xl bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white    hover:bg-blue-600 focus-visible:ring  md:text-base font-poppins mt-3  ">
      {name}
    </button>
  );
}

export default AuthButton
