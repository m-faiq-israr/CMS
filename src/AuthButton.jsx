import React from "react";
import { FiLoader } from "react-icons/fi";

const AuthButton = ({ name, loading }) => {
  return (
    <button
      type="submit"
      className="rounded-xl bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-600 focus-visible:ring md:text-base font-poppins mt-3 flex items-center justify-center"
      disabled={loading}
    >
     {loading ? <FiLoader className="animate-spin mr-2" size={20} /> : name}
    </button>
  );
};

export default AuthButton;
