import React from 'react'

const TextArea = ({onChange, name, id, value, columns, rows, placeholder}) => {
  return (
    <>
      <textarea
        rows={rows}
        cols={columns}
        className=" rounded-xl border bg-gray-5 px-3 py-2 text-gray-800 outline-none ring-indigo-300 focus:ring dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
        id={id}
      >
      
      </textarea>
    </>
  );
}

export default TextArea
