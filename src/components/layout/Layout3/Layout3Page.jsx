import React from "react";
import ProfileComp from "./ProfileComp";
import MainCard from "../../MainCard";

const Layout3Page = () => {
  return (
    <div className="flex flex-col items-center  py-10 bg-indigo-200 dark:bg-slate-800">
      <div>
        <ProfileComp />
      </div>
      <div>
        <MainCard roundness={"rounded-b-2xl"} AboutmeBg={"bg-gray-50"} />
      </div>
    </div>
  );
};

export default Layout3Page;
