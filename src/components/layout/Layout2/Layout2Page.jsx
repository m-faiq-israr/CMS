import React from 'react'
import ProfileSection from './ProfileSection'
import DetailSection from './DetailSection'
const Layout2Page = () => {
  

  return (
    <div className="w-screen    flex justify-center bg-gray-200  dark:bg-slate-800 xs:px-4 md:px-4">
      <div className=" bg-teal-700 md:flex justify-center p-2 my-14 rounded-2xl ">
        <ProfileSection />
        <DetailSection />
      </div>
    </div>
  );
}

export default Layout2Page
