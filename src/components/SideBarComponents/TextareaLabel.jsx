import React from 'react'

const TextareaLabel = ({name}) => {
  return (
    <label
      className="font-semibold text-lg ml-2 text-gray-600 dark:text-gray-200"
      htmlFor=""
    >
      {name}
    </label>
  );
}

export default TextareaLabel
