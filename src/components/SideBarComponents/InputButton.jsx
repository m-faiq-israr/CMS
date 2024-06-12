import React from 'react'

const InputButton = ({name, type}) => {
  return (
    <button type={type} className='bg-indigo-500 font-poppins font-semibold text-white py-2 px-8 rounded-xl hover:bg-indigo-600'>
      {name}
    </button>
  )
}

export default InputButton
