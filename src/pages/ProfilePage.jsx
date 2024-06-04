import React from 'react'
import ProfileCard from '../components/ProfileCard'
import MainCard from '../components/MainCard'
import Layout1 from '../components/layout/Layout1';
import ProfileSection from '../components/layout/Layout2/ProfileSection';
import DetailSection from '../components/layout/Layout2/DetailSection';
import Layout2Page from '../components/layout/Layout2/Layout2Page';
import HomePage from './HomePage';
import ProfileComp from '../components/layout/Layout3/ProfileComp';
import Layout3Page from '../components/layout/Layout3/Layout3Page';
import LayoutButton from '../components/layout/LayoutButton';
const ProfilePage = () => {
  
  const layoutName = localStorage.getItem("Layout");
  return (
    <>
      {layoutName === "Layout1" ? (
        <Layout1 />
      ) : layoutName === "Layout2" ? (
        <Layout2Page />
      ) : layoutName === "Layout3" ? (
        <Layout3Page />
      ) : (
        "Please Select the layout style"
      )}
     
    </>
  );
}

export default ProfilePage
