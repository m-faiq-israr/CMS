import React from 'react'
import ProjectComponent from './ProjectComponent';

const ProjectSection = () => {
  return (
    <div>
      <ProjectComponent
        projectName={"Dashy"}
        techUsed={"React, SyncFusion, Tailwind CSS"}
        point1={
          "Implemented data visualizations and charts using Syncfusion components to present complex data."
        }
        
      />

      <ProjectComponent
        projectName={"Hazri"}
        techUsed={"Flutter, Firebase"}
        point1={
          "Implemented data Developed Facial Recognition-based Student Attendance Management app using Flutter aimed for universities and high school. and charts using Syncfusion components to present complex data."
        }
        
      />
    </div>
  );
}

export default ProjectSection
