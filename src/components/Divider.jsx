import React from 'react'

const Divider = () => {
  return (
    <div className=' flex  justify-between items-center'>
      <div className='h-0.5 bg-gray-300 rounded-full w-48'></div>
      <h1 className='font-poppins text-gray-800 dark:text-gray-100'>or</h1>
      <div className='h-0.5 bg-gray-300 rounded-full w-48'></div>
    </div>
  )
}

export default Divider
