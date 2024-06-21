import React from 'react'
import { useStateContext } from '../../context/ContextProvider';
import { MdDelete } from 'react-icons/md';


const RemoveFieldButton = ({name, onClick}) => {
  const {inputs} = useStateContext();
  const disableButton = inputs.length <= 1;
  
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`bg-red-500 px-4 py-2 rounded-xl text-white font-semibold hover:bg-red-600 select-none disabled:bg-red-400 disabled:cursor-not-allowed flex items-center gap-1`}
        // disabled= {disableButton}
      >
        {name}
        <MdDelete />
      </button>
    </div>
  );
}

export default RemoveFieldButton
