import React from 'react'
import LayoutButton from '../components/layout/LayoutButton';
import { useNavigate } from "react-router-dom";
import { useStateContext } from '../context/ContextProvider';
import { TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';
const LayoutPreviewPage = () => {
  const {openSidebar} = useStateContext();
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/profile");
    };
  return (
    <div
      className={` bg-indigo-100 xs:-ml-[10%]  h-screen  dark:bg-gray-800  w-screen ${
        openSidebar ? "" : " "
      } duration-300`}
    >
      <div className="flex flex-col items-center justify-center xs:pt-10 sm:pt-40  md:pt-40 xs:pb-10  top-[]">
        <h1 className=" select-none dark:text-white ml-0 text-gray-700 font-poppins font-bold mb-6  text-2xl ">
          Select the Layout to Preview,
        </h1>

        <div className="xs:flex xs:flex-col  flex justify-center items-center gap-3">
          <LayoutButton layoutNo={"Layout1"} />
          <LayoutButton layoutNo={"Layout2"} />
          <LayoutButton layoutNo={"Layout3"} />
        </div>
        <div className="mt-4 pr-5">
          <button
            onClick={handleClick}
            className="  bg-indigo-500 xs:ml-4 px-12 py-2 rounded-xl ml-8 mt-6 text-white text-lg font-semibold hover:bg-indigo-600 flex items-center gap-1"
          >
            <h1>Preview</h1>
            <TbLayoutSidebarRightCollapseFilled size={'24px'} className='pt-0.5' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LayoutPreviewPage
