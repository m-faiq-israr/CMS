import React from 'react'
import ProjectComponent from './ProjectComponent';
import { useStateContext } from '../../context/ContextProvider';
const ProjectSection = () => {
  const { getProjectData} = useStateContext();
  return (
    <>
      {getProjectData ? (
        <div>
          {getProjectData.map((project, index) => (
            <ProjectComponent
              key={index}
              projectName={project.projectTitle}
              techUsed={project.techUsed}
              point1={project.point1}
            />
          ))}
        </div>
      ) : (
        <div className="pb-28"></div>
      )}
    </>
  );
}

export default ProjectSection
