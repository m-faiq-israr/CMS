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
        className={` bg-red-600 px-4 py-2 rounded-xl text-white font-semibold hover:bg-red-700 select-none disabled:bg-red-600 disabled:cursor-not-allowed flex items-center gap-1`}
        // disabled= {disableButton}
      >
        {name}
        <MdDelete />
      </button>
    </div>
  );
}

export default RemoveFieldButton
