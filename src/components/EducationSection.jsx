import React from 'react'
import EducationComponent from './EducationComponent';

const EducationSection = () => {
  return (
    <div>
      <EducationComponent
        InstitueName={"NED University of Engineering & Technology"}
        startDate={"Sep 2021"}
        endDate={"June 2025"}
        degree={"Bachelors in Software Engineering"}
        cgpa={"3.3"}
      />

      <EducationComponent
        InstitueName={"Adamjee Government Science College"}
        startDate={"2019"}
        endDate={"2021"}
        degree={"Intermediate"}
        cgpa={"82%"}
      />

      <EducationComponent
        InstitueName={"Quaid-e-Azam Rangers School"}
        startDate={"2017"}
        endDate={"2019"}
        degree={"Matriculation"}
        cgpa={"88%"}
      />
    </div>
  );
}

export default EducationSection
