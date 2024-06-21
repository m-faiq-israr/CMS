import React from 'react'
import { GrUpdate } from 'react-icons/gr';

const InputButton = ({name, type}) => {
  return (
    <button
      type={type}
      className="bg-indigo-500 font-poppins font-semibold text-white py-2 px-8 rounded-xl hover:bg-indigo-600 flex items-center gap-2"
    >
      {name}
      <GrUpdate />
    </button>
  );
}

export default InputButton
