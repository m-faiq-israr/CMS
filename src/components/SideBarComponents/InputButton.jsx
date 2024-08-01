import React from 'react'
import { FiLoader } from 'react-icons/fi';
import { GrUpdate } from 'react-icons/gr';

const InputButton = ({name, type, loading}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className=" disabled:cursor-not-allowed disabled:bg-indigo-600 bg-indigo-500 font-poppins font-semibold text-white py-2 px-8 rounded-xl hover:bg-indigo-600  text-center"
    >
      {loading ? (
        <FiLoader className="animate-spin mx-8 " size={20} />
      ) : (
        <div className="flex items-center gap-2">
          {name}
          <GrUpdate />
        </div>
      )}
    </button>
  );
}

export default InputButton
