import React from 'react'
import { useStateContext } from '../context/ContextProvider'
const SelectionButton = ({ title, icon: Icon }) => {
  const { setskillCard } = useStateContext();

  const handleClick = () => {
    setskillCard(title);
   
  };
 

  return (
    <button
      className="flex justify-center items-center gap-2 px-3  py-[2px]  mt-[17px] font-poppins text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-500 rounded-lg hover:cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-600 dark:focus:bg-gray-800  focus:bg-gray-400 focus:text-gray-800  font-semibold "
      onClick={handleClick}
    >
      {<Icon />}
      <div>{title}</div>
    </button>
  );
};

export default SelectionButton
