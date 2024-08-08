import React from 'react'
import InputDetails from './InputDetails';
import TextArea from './TextArea'
import TextareaLabel from './TextareaLabel';
import RemoveFieldButton from './RemoveFieldButton';
import { useStateContext } from "../../context/ContextProvider";

const AddExperienceBox = ({
  handleRemove,
  value,
  index,
  loading,
  handleExperienceChange,
}) => {
  // const { handleExperienceChange } = useStateContext();

  return (
    <div className="bg-gray-50 dark:bg-gray-600 p-8 rounded-xl">
      <div className="flex flex-col gap-4">
        <InputDetails
          heading={"Designation"}
          htmlFor={"designation"}
          name={"designation"}
          value={value.designation}
          type={"text"}
          placeholder={"@eg. Software Engineer"}
          width={"full"}
          onChange={(e) =>
            handleExperienceChange(index, "designation", e.target.value)
          }
          loading={loading}
        />
        <InputDetails
          heading={"Company Name"}
          htmlFor={"companyName"}
          name={"companyName"}
          value={value.companyName}
          type={"text"}
          placeholder={"Enter the Company Name"}
          width={"full"}
          onChange={(e) =>
            handleExperienceChange(index, "companyName", e.target.value)
          }
          loading={loading}
        />
        <div className="md:flex gap-6 justify-between">
          <InputDetails
            heading={"Start Date"}
            htmlFor={"startDate"}
            name={"startDate"}
            value={value.startDate}
            type={"text"}
            placeholder={"Enter Starting Date"}
            width={"full"}
            onChange={(e) =>
              handleExperienceChange(index, "startDate", e.target.value)
            }
            loading={loading}
          />
          <InputDetails
            heading={"End Date"}
            htmlFor={"endDate"}
            name={"endDate"}
            value={value.endDate}
            type={"text"}
            placeholder={"Enter Ending Date"}
            width={"full"}
            onChange={(e) =>
              handleExperienceChange(index, "endDate", e.target.value)
            }
            loading={loading}
          />
          <InputDetails
            heading={"Location"}
            htmlFor={"location"}
            name={"location"}
            value={value.location}
            type={"text"}
            placeholder={"@eg. Karachi, Pakistan"}
            width={"full"}
            onChange={(e) =>
              handleExperienceChange(index, "location", e.target.value)
            }
            loading={loading}
          />
        </div>
        <div className=" space-y-4">
          <div className="flex flex-col">
            <TextareaLabel name={"Bullet Point 1"} />
            <TextArea
              rows={3}
              placeholder={"Write briefly about your role"}
              name={"point1"}
              value={value.point1}
              onChange={(e) =>
                handleExperienceChange(index, "point1", e.target.value)
              }
              disabled={loading}
            />
          </div>
          <div className="flex flex-col">
            <TextareaLabel name={"Bullet Point 2"} />
            <TextArea
              columns={55}
              rows={3}
              placeholder={"Write briefly about your role"}
              name={"point2"}
              value={value.point2}
              onChange={(e) =>
                handleExperienceChange(index, "point2", e.target.value)
              }
              disabled={loading}
            />
          </div>
          <div className="flex flex-col">
            <TextareaLabel name={"Bullet Point 3"} />
            <TextArea
              columns={55}
              rows={3}
              placeholder={"Write briefly about your role"}
              name={"point3"}
              value={value.point3}
              onChange={(e) =>
                handleExperienceChange(index, "point3", e.target.value)
              }
              disabled={loading}
            />
          </div>
        </div>

        <div className="mt-5 flex justify-end ">
          <RemoveFieldButton
            name={"Remove "}
            onClick={handleRemove}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AddExperienceBox
