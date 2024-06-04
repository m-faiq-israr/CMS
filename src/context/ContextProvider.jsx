import { createContext, useContext, useState } from "react";

import FileDownload from "react-file-download";
const StateContext = createContext();

export const ContextProvider = ({children})=>{

    const [credentials, setCredentials] = useState({email:'', password:'', name:'', profession:''});

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    const [skillCard, setskillCard] = useState('')

    const [selectLayoutButton, setSelectLayoutButton] = useState(false);

    // const downloadPdf = () => {
    //   const path = "../assets/FAIQ RESUME UPDATED.pdf";
    //   const link = document.createElement("a");
    //   link.href = path;
    //   link.download = "resume.pdf";
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // };

     const downloadPDF = () => {
       const pdfPath = "../assets/FAIQ RESUME UPDATED.pdf";
       const filename = `${credentials.name} Resume.pdf`; 
       FileDownload(pdfPath, filename);
     };






    return (
      <StateContext.Provider
        value={{
          credentials,
          setCredentials,
          onChange,
          skillCard,
          setskillCard,
          downloadPDF,
          selectLayoutButton,
          setSelectLayoutButton,
          
        }}
      >
        {children}
      </StateContext.Provider>
    );

}

export const useStateContext = ()=> useContext(StateContext);