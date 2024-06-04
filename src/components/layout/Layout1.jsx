import React from 'react'
import ProfileCard from '../ProfileCard';
import MainCard from '../MainCard';

const Layout1 = () => {
  return (

    <div className="w-screen flex gap-4 justify-center pb-10 bg-gray-200 dark:bg-gray-900 ">
      <div>
        <ProfileCard />
      </div>
      <div className="mt-20">
        <MainCard roundness={'rounded-2xl'} AboutmeBg={'bg-white'} />
      </div>
    </div>
  );
}

export default Layout1
