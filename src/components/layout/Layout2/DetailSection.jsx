import React from 'react'
import AboutSection from './AboutSection';
import { TfiEmail } from 'react-icons/tfi';
import ContactDetails from './ContactDetails';
import { FaCodeBranch } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import WorkExperience from './WorkExperience';
import { HiOfficeBuilding } from "react-icons/hi";
import ProjectComponent from './ProjectComponent';


const DetailSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-100 w-[60rem] pl-10 pr-10 pt-8 rounded-r-xl">
      {/* div for about details */}
      <AboutSection />

      {/* detail card */}
      <ContactDetails
        email={"mfaiqisrar@gmail.com"}
        phoneNo={"0340-831142"}
        location={"Karachi, Pakistan"}
        linkedIn={"M Faiq Israr"}
      />

      {/* Work Experience */}
      <div className="mt-8">
        <div className="flex items-center gap-2 text-gray-800 font-bold text-2xl font-poppins">
          <div className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-gray-200">
            <HiOfficeBuilding />
          </div>
          <h1 className="text-3xl">Work Experience</h1>
        </div>
        <div className="mt-4">
          <WorkExperience
            designation={"Intern - Full Stack Developer"}
            startDate={"May 2024"}
            endDate={"Present"}
            location={"Karachi, Pakistan"}
            company={"AtomPoint"}
            point1={
              "Collaborated with the IT team to identify areas for improvement in the company's dealership web portal."
            }
            point2={
              "Contributed to the enhancement of the web portal's user interface and functionality through active participation in design discussions and implementation efforts."
            }
            point3={
              "Demonstrated adaptability and a willingness to learn frontend and backend of the web applications during the internship period."
            }
          />
          <WorkExperience
            designation={"Intern - IT Department"}
            startDate={"March 2024"}
            endDate={"April 2024"}
            location={"Karachi, Pakistan"}
            company={"Pak Suzuki Motor Company Limited"}
            point1={
              "Collaborated with the IT team to identify areas for improvement in the company's dealership web portal."
            }
            point2={
              "Contributed to the enhancement of the web portal's user interface and functionality through active participation in design discussions and implementation efforts."
            }
            point3={
              "Demonstrated adaptability and a willingness to learn frontend and backend of the web applications during the internship period."
            }
          />
        </div>
      </div>

      {/* project section */}
      <div className='mt-4 mb-6'>
        <div className="flex items-center gap-2 text-gray-800 font-bold text-2xl font-poppins">
          <div className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-gray-200">
            <HiOfficeBuilding />
          </div>
          <h1 className="text-3xl">Projects</h1>
        </div>
        <div>
          <ProjectComponent ProjectName={'Chatting App'} techUsed={'MERN, SyncFusion, Socket.IO'}/>
          <ProjectComponent ProjectName={'Attendance Management App using Facial Recognition'} techUsed={'Flutter, Firebase'}/>
        </div>
      </div>
    </div>
  );
}

export default DetailSection
