import React from 'react'
import { useStateContext } from '../../context/ContextProvider';
import { MdDelete } from 'react-icons/md';


const RemoveFieldButton = ({name, onClick, disabled}) => {


  
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={` bg-red-600 text-sm md:text-base px-2 py-1 
          md:px-4 md:py-2 rounded-xl text-white font-semibold hover:bg-red-700 select-none disabled:bg-red-600 disabled:cursor-not-allowed flex items-center gap-1`}
        // disabled= {disableButton}
      >
        {name}
        <MdDelete />
      </button>
    </div>
  );
}

export default RemoveFieldButton
