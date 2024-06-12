import React from 'react'

const AddFieldButton = ({name, onClick}) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="bg-green-400 select-none px-4 py-2 rounded-xl text-white font-semibold hover:bg-green-500"
      >
        {name}
      </button>
    </div>
  );
}

export default AddFieldButton
