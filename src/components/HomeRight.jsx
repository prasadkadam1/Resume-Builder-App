import React, { Fragment, forwardRef, useContext, useRef } from 'react'
import { myContext } from '../MyContext'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

const HomeRight = (props, ref) => {
  console.log(ref);
  let userData = useContext(myContext)
  let { state, setState, selectedImage, setSelectedImage } = userData
  // const resumeRef = useRef(null);
  // const downloadPDF = (e) => {
  //   e.preventDefault()
  //   console.log("hello");
  //   html2canvas(resumeRef.current, { scale: 2 }).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF({ imageCompression: false });
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //     pdf.save('resume.pdf');
  //   });
  // };
  return (
    <div className='w-[35%] h-[100%] px-2 overflow-y-auto text-[7px]' id='homeRightDiv' >

      <div ref={ref}>

        <div className='border-2 p-2 px-1'>
          <div className='w-[100%] border-b-2 pb-1 flex justify-center'>
            <section className='flex justify-start w-[100%]'>
              <article className='w-[20%]'>
                {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" className='rounded-full h-[90%] me-3' />}
              </article>
              <article className='ps-5'>
                <p className='font-bold text-xl text-center text-blue-700'> {state.studentName}</p>
                <p className='font-bold text-base '>{state.workingAs}</p>
              </article>
            </section>
          </div>
          <div>
            <article className='text-[8px] font-bold text-blue-700 text-center pt-1'>About</article>
            <p className='indent-20'>{state.aboutSession}</p>
          </div>
          <div>
            <p className='text-[8px] font-bold text-blue-700 pt-1' >Qualification : </p>
            <table className='text-[7px]  w-[100%] border-[1px] mt-1'>
              <thead className='bg-blue-200'>
                <tr>
                  <th className='w-[6vw]  align-text-top  h-[3vh]'></th>
                  <th className='w-[2vw]  align-text-top h-[3vh]'>%</th>
                  <th className='w-[3vw]  align-text-top h-[3vh]'>year of passout</th>
                  <th className='w-[9vw]  align-text-top h-[3vh]'>Board</th>
                  <th className='w-[6vw]  align-text-top h-[3vh]'>Stream</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className='bg-blue-100'>
                <th>Post Graduation</th>
                <td>{state.pgPercentage}%</td>
                <td>{state.pgYearOfPassout}</td>
                <td>{state.pgUniversity}</td>
                <td>{state.pgStream}</td>
              </tr> */}
                <tr >
                  <th className='h-[3vh]  align-text-top'>Graduation</th>
                  <td className='h-[3vh]  align-text-top'>{state.graduationPercentage}%</td>
                  <td className='h-[3vh]  align-text-top'>{state.graduationYearOfPassout}</td>
                  <td className='h-[3vh]  align-text-top'>{state.graduationUniversity}</td>
                  <td className='h-[3vh]  align-text-top'>{state.graduationStream}</td>
                </tr>
                {/* <tr className='bg-blue-100'>
                <th>Diploma</th>
                <td>{state.diplomaPercentage}%</td>
                <td>{state.diplomaYearOfPassout}</td>
                <td>{state.diplomaUniversity}</td>
                <td>{state.diplomaStream}</td>
              </tr> */}
                <tr >
                  <th className='h-[3vh] align-text-top'>Diploma/HSC</th>
                  <td className='h-[3vh] align-text-top'>{state.hscPercentage}%</td>
                  <td className='h-[3vh] align-text-top'>{state.hscYearOfPassout}</td>
                  <td className='h-[3vh] align-text-top'>{state.hscBoard}</td>
                  <td className='h-[3vh] align-text-top'>{state.hscStream}</td>
                </tr>
                <tr >
                  <th className='h-[3vh] align-text-top'>SSC</th>
                  <td className='h-[3vh] align-text-top'>{state.sscPercentage}%</td>
                  <td className='h-[3vh] align-text-top'>{state.sscYearOfPassout}</td>
                  <td className='h-[3vh] align-text-top'>{state.sscBoard}</td>
                  <td className='h-[3vh] align-text-top'>{state.sscStream}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <section className='flex w-[100%] mt-2'>
            <div className='w-[30%] border-e-2 pe-3'>
              <article className='text-[8px] font-bold text-blue-700' >Personal Details</article>
              <p className='w-[95%] overflow-x-hidden text-[5px] noScrollBar mt-1' ><span className='text-blue-400 py-2'><span> <BiLogoGmail className='text-[7px] inline' /></span> :</span> {state.email}</p>
              <p className='w-[95%] overflow-x-hidden noScrollBar'> <span className='text-blue-400 py-2'><FaPhoneAlt className='text-[6px] inline' /> : </span> {state.phoneNo}</p>
              <p className='w-[95%] overflow-x-hidden noScrollBar'> <span className='text-blue-400 py-2'><MdHome className='text-[7px] inline' /> : </span> {state.address}</p>
              <article>
                <p className='text-[8px] font-bold text-blue-700 pt-3' >Social Links</p>
                <p> <span className='text-blue-400 pt-3' ><FaLinkedin className='text-[7px] inline' /> : </span> {state.linkedIn}</p>
                <p> <span className='text-blue-400'><FaFacebookSquare className='text-[7px] inline' /> : </span> {state.facebook}</p>
                <p> <span className='text-blue-400'><IoLogoTwitter className='text-[7px] inline' /> : </span> {state.twitter}</p>
                <p> <span className='text-blue-400'><FaInstagramSquare className='text-[7px] inline' /> : </span> {state.instagram}</p>
              </article>
              <article>
                <p className='text-[8px] font-bold text-blue-700 pt-3' >Hobbies </p>
                <span>{state.otherSkills.map((skill, index) => {
                  return (
                    <Fragment key={index}>
                      <span>{skill} , </span>
                    </Fragment>
                  )
                })}</span>
              </article>
              {/* <article>
              <p className='text-sm font-bold text-blue-700 pt-3' >Soft Skills </p>
              <span>{state.softSkills.map((skill, index) => {
                return (
                  <Fragment key={index}>
                    <span>{skill} , </span>
                  </Fragment>
                )
              })}</span>
            </article> */}
            </div>
            <div className='w-[70%]  ps-3'>
              <article>
                <p className='text-[8px] font-bold text-blue-700 ' >Technical Skills </p>
                <div><span className='text-blue-400'>Progamming Languages : </span> {state.programmingLang.map((lang, index) => {
                  return (
                    <Fragment key={index}>
                      <span>{lang}, </span>
                    </Fragment>
                  )
                })}</div>
                {/* <div><span className='text-blue-400'>web Languages : </span> {state.webTech.map((lang, index) => {
                return (
                  <Fragment key={index}>
                    <span>{lang}, </span>
                  </Fragment>
                )
              })}</div> */}
                <div><span className='text-blue-400'>Libraries &  Frameworks : </span> {state.librariesFrameworks.map((lang, index) => {
                  return (
                    <Fragment key={index}>
                      <span>{lang}, </span>
                    </Fragment>
                  )
                })}</div>
                {/* <div><span className='text-blue-400'>J2EE : </span> {state.j2eeTech.map((lang, index) => {
                return (
                  <Fragment key={index}>
                    <span>{lang}, </span>
                  </Fragment>
                )
              })}</div> */}
                <div><span className='text-blue-400'>Tools & Utilities : </span> {state.toolsUtilities.map((lang, index) => {
                  return (
                    <Fragment key={index}>
                      <span>{lang}, </span>
                    </Fragment>
                  )
                })}</div>
                {/* <div><span className='text-blue-400'>Other Technologies : </span> {state.otherTechnologies.map((lang, index) => {
                return (
                  <Fragment key={index}>
                    <span>{lang}, </span>
                  </Fragment>
                )
              })}</div> */}
                {/* <div><span className='text-blue-400'>Version control tools : </span> {state.versionControl.map((tool, index) => {
                return (
                  <Fragment key={index}>
                    <span>{tool}, </span>
                  </Fragment>
                )
              })}</div> */}
                {/* <div><span className='text-blue-400'>Web/App servers : </span> {state.webAppServer.map((lang, index) => {
                return (
                  <Fragment key={index}>
                    <span>{lang}, </span>
                  </Fragment>
                )
              })}</div> */}
              </article>
              <article>
                <p className='text-[8px] font-bold text-blue-700 pt-3' >Experience</p>
                <p> <span className='text-blue-400'>Company : </span> {state.companyName}</p>
                <p> <span className='text-blue-400'>years of experience : </span> {state.experienceInYears}</p>

                <div><span className='text-blue-400'>Key responsibilities : </span> {state.keyResponsibility.map((key, index) => {
                  return (
                    <Fragment key={index}>
                      <span>{key}, </span>
                    </Fragment>
                  )
                })}</div>
              </article>

              {/* projects */}
              <article>
                <p className='text-[8px] font-bold text-blue-700 pt-3' >Project</p>
                <p> <span className='text-blue-400'>Project Name : </span> {state.projectName}</p>
                <p> <span className='text-blue-400'>Description : </span> {state.description}</p>
                <div><span className='text-blue-400'>Technologies User : </span> {state.technologiesUsed.map((tech, index) => {
                  return (
                    <Fragment key={index}>
                      <span>{tech}, </span>
                    </Fragment>
                  )
                })}</div>
                <div> <span className='text-blue-400'>Team : </span> {state.team}</div>
              </article>
              {/* achivements */}
              <article className='pt-3'>
                <p> <span className='text-[8px] font-bold text-blue-700 pt-3'>Achivements : </span> {state.achivements}</p>
              </article>
            </div>
          </section>
        </div>
      </div>
      {/* <button onClick={downloadPDF} className='w-[100%] bg-green-700 mt-1 text-white p-1'>Download Resume as PDF</button> */}
    </div>
  )
}

export default forwardRef(HomeRight)