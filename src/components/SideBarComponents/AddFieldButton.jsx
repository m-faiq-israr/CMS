import React from 'react'
import { MdAdd } from 'react-icons/md';

const AddFieldButton = ({name, onClick}) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="bg-green-400 select-none px-4 py-2 rounded-xl text-white font-semibold hover:bg-green-500 flex items-center gap-1"
      >
        {name}
        <MdAdd 
          color="rgba(255,255,255)"
         
          size={"20px"}
        />
      </button>
    </div>
  );
}

export default AddFieldButton
