import React from 'react'
import InputField from '../InputField';

const InputDetails = ({heading, name, onChange, placeholder, type, width, htmlFor, value}) => {
  return (
    <div>
      <label className="font-semibold text-gray-600 text-lg ml-2 dark:text-gray-200" htmlFor={htmlFor}>{`${heading}*`}</label>
      <InputField 
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      width={width}
      value={value}
      />
    </div>
  );
}

export default InputDetails
