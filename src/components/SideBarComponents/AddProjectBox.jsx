import React from 'react'
import InputDetails from './InputDetails'
import TextareaLabel from './TextareaLabel';
import TextArea from './TextArea';
import RemoveFieldButton from './RemoveFieldButton';
import { useStateContext } from '../../context/ContextProvider';

const AddProjectBox = ({
  index,
  value,
  removeField,
  loading,
  handleProjectChange,
}) => {
  // const { handleProjectChange } = useStateContext();
  return (
    <div className="bg-gray-50 dark:bg-gray-600 p-8 rounded-xl">
      <div className="flex flex-col gap-4">
        <InputDetails
          heading={"Project Title"}
          htmlFor={"projectTitle"}
          name={"projectTitle"}
          value={value.projectTitle}
          type={"text"}
          placeholder={"Enter your Project Name"}
          width={"full"}
          onChange={(e) =>
            handleProjectChange(index, "projectTitle", e.target.value)
          }
          loading={loading}
        />

        <InputDetails
          heading={"Technologies Used"}
          htmlFor={"techUsed"}
          name={"techUsed"}
          value={value.techUsed}
          type={"text"}
          placeholder={"@eg. React, Tailwind, Firebase "}
          width={"full"}
          onChange={(e) =>
            handleProjectChange(index, "techUsed", e.target.value)
          }
          loading={loading}
        />
        <div className="flex flex-col">
          <TextareaLabel name={"Project Description"} />
          <TextArea
            columns={55}
            rows={3}
            value={value.point1}
            placeholder={"Write briefly about your Project"}
            name={"point1"}
            onChange={(e) =>
              handleProjectChange(index, "point1", e.target.value)
            }
            disabled={loading}
          />
        </div>
        <div className="mt-5  flex justify-end">
          <RemoveFieldButton
            name={"Remove "}
            onClick={removeField}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProjectBox
