import React from 'react'
import EducationComponent from './EducationComponent';
import { useStateContext } from '../context/ContextProvider';
const EducationSection = () => {
  const {  getEducationData } = useStateContext();

  
  return (
    <>
      {getEducationData ? (
        <div>
          {getEducationData.map((education, index) => (
            <EducationComponent
              key={index}
              InstitueName={education.institute}
              startDate={education.startDate}
              endDate={education.endDate}
              degree={education.degree}
              cgpa={education.cgpa}
            />
          ))}
        </div>
      ) : (
        <div className="mb-28"></div>
      )}
    </>
  );
}

export default EducationSection
