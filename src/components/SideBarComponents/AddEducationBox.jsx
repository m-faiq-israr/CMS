import React, { useState } from 'react'
import InputDetails from './InputDetails';
import RemoveFieldButton from './RemoveFieldButton';
import { useStateContext } from '../../context/ContextProvider';
const AddEducationBox = ({index, value, onClick}) => {
   
    
    const {handleChange} = useStateContext();
  return (
    <div className="bg-gray-50 dark:bg-gray-600 p-8 rounded-xl">
      <div className="flex flex-col gap-4">
        <InputDetails
          heading={"Institute Name"}
          htmlFor={"institute"}
          name={"institute"}
          value={value.institute}
          type={"text"}
          placeholder={"Enter your Institute Name"}
          width={"full"}
          onChange={(e) => handleChange(index, "institute", e.target.value)}
        />
        <InputDetails
          heading={"Degree"}
          htmlFor={"degree"}
          name={"degree"}
          value={value.degree}
          type={"text"}
          placeholder={"Enter your Degree Name"}
          width={"full"}
          onChange={(e) => handleChange(index, "degree", e.target.value)}
        />
        <div className="flex gap-6 justify-between">
          <InputDetails
            heading={"Start Date"}
            htmlFor={"startDate"}
            name={"startDate"}
            value={value.startDate}
            type={"text"}
            placeholder={"Enter Starting Date"}
            width={""}
            onChange={(e) => handleChange(index, "startDate", e.target.value)}
          />
          <InputDetails
            heading={"End Date"}
            htmlFor={"endDate"}
            name={"endDate"}
            value={value.endDate}
            type={"text"}
            placeholder={"Enter Ending Date"}
            width={""}
            onChange={(e) => handleChange(index, "endDate", e.target.value)}
          />
          <InputDetails
            heading={"CGPA"}
            htmlFor={"cgpa"}
            name={"cgpa"}
            value={value.cgpa}
            type={"text"}
            placeholder={"Enter your CGPA"}
            width={""}
            onChange={(e) => handleChange(index, "cgpa", e.target.value)}
          />
        </div>
      </div>

      <div className="pt-7 flex justify-end">
        <RemoveFieldButton name={"Remove "} onClick={onClick} />
      </div>
    </div>
  );
}

export default AddEducationBox
