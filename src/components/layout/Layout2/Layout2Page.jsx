import React from 'react'
import ProfileSection from './ProfileSection'
import DetailSection from './DetailSection'
const Layout2Page = () => {

  return (
    <div className="w-screen flex justify-center bg-gray-200  dark:bg-gray-700">
      <div className="w-[81rem] bg-teal-700 flex justify-center py-2 my-14 rounded-2xl">
        <ProfileSection />
        <DetailSection />
      </div>
    </div>
  );
}

export default Layout2Page
