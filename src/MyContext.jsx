import { createContext, useRef, useState } from "react";

export let myContext = createContext()
import React from 'react'

const MyContext = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  let [state, setState] = useState(
    {
      img: "",
      studentName: "",
      workingAs: "",
      aboutSession: "",

      pgPercentage: "",
      pgYearOfPassout: "",
      pgStream: "",
      pgUniversity: "",

      graduationPercentage: "",
      graduationYearOfPassout: "",
      graduationStream: "",
      graduationUniversity: "",

      diplomaPercentage: "",
      diplomaYearOfPassout: "",
      diplomaStream: "",
      diplomaUniversity: "",

      hscPercentage: "",
      hscYearOfPassout: "",
      hscBoard: "",
      hscStream: "-",

      sscPercentage: "",
      sscYearOfPassout: "",
      sscBoard: "",
      sscStream: "-",

      email: "",
      phoneNo: "",
      address: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
      instagram: "",
      otherSkills: [],
      // softSkills: [],

      programmingLang: [],
      webTech: [],
      librariesFrameworks: [],
      j2eeTech: [],
      toolsUtilities: [],
      otherTechnologies: [],
      versionControl: [],
      webAppServer: [],

      // experience: [{
      companyName: "",
      experienceInYears: "",
      keyResponsibility: [],

      projectName: "",
      description: "",
      technologiesUsed: [],
      team: "",
      achivements: "",
    }
  )
  // const resumeRef = useRef(null);
  // const downloadPDF = (e) => {
  //   e.preventDefault()
  //   console.log("hello");
  //   html2canvas(resumeRef.current).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //     pdf.save('resume.pdf');
  //   });
  // };


  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <myContext.Provider value={{ state, setState, selectedImage, setSelectedImage, isLoggedIn, setIsLoggedIn }}>{children}</myContext.Provider>
  )
}

export default MyContext