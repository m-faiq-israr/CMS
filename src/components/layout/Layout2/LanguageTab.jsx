import React from 'react'

const LanguageTab = ({language, proficiency}) => {
  return (
    <div className="font-poppins text-gray-300 pb-6">
      <h1 className="font-bold text-md">{language}</h1>
      <h1 className="italic text-gray-400">{proficiency}</h1>
    </div>
  );
}

export default LanguageTab
