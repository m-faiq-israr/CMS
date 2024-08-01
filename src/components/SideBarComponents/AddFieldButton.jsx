import React from 'react'
import { MdAdd } from 'react-icons/md';

const AddFieldButton = ({name, onClick, disabled}) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`disabled:cursor-not-allowed  bg-green-400 select-none px-4 py-2 rounded-xl text-white font-semibold ${
          disabled ? "" : "hover:bg-green-500"
        }  flex items-center gap-1`}
      >
        {name}
        <MdAdd color="rgba(255,255,255)" size={"20px"} />
      </button>
    </div>
  );
}

export default AddFieldButton
