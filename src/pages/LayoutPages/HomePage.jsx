import React from "react";
import LayoutPreviewPage from "./LayoutPreviewPage";
import { useStateContext } from "../../context/ContextProvider";

const HomePage = () => {
const {  openSidebar } = useStateContext();

  
  return (
<div className={`${openSidebar ? 'lg:-ml-[21%]' : 'lg:-ml-[8%]'} xs:ml-[10%]`}>

    
    <LayoutPreviewPage/>
   </div>
  );
};

export default HomePage;
