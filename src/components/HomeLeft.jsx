import { myContext } from '../MyContext'
import { forwardRef, useContext } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const HomeLeft = (props, ref) => {
  console.log(ref.current);
  const navigate = useNavigate()
  let userData = useContext(myContext)
  let { state, setState, selectedImage, setSelectedImage, isLoggedIn, setIsLoggedIn } = userData

  const handleImage = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setSelectedImage(file);
  }

  let handleChangeString = (e) => {
    let { name, value } = e.target;
    // const pattern = /^[A-Za-z]+$/;
    const pattern = /^[A-Za-z\s]+$/;
    // Test the input value against the pattern
    if (pattern.test(value) || value === '') {
      setState({ ...state, [name]: value, loading: true });
    }
  };

  const handleChangePhone = (event) => {

    const { name, value } = event.target;

    // Validate Indian phone number format (10 digits starting with 7, 8, or 9)
    if (/^[789]\d{0,9}$/.test(value) || value === '') {
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };


  const handleChangeNumber = (event) => {
    const { name, value } = event.target;

    // Validate if the input is a number representing a percentage between 0 and 100
    if (/^\d+$/.test(value) || value === '') {
      const intValue = parseInt(value, 10);
      if (intValue >= 0 && intValue <= 100) {
        setState(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    }
  };
  // const handleKeyPressPg = (event) => {
  //   if (event.key === 'Backspace' && state.pgPercentage.length === 2) {
  //     setState(prevState => ({
  //       ...prevState,
  //       pgPercentage: ''
  //     }));
  //   }
  // };


  const handleKeyPressGrad = (event) => {
    if (event.key === 'Backspace' && state.graduationPercentage.length === 2) {
      setState(prevState => ({
        ...prevState,
        graduationPercentage: ''
      }));
    }
  };


  const handleKeyPressDiploma = (event) => {
    if (event.key === 'Backspace' && state.diplomaPercentage.length === 2) {
      setState(prevState => ({
        ...prevState,
        diplomaPercentage: ''
      }));
    }
  };


  const handleKeyPresshsc = (event) => {
    if (event.key === 'Backspace' && state.hscPercentage.length === 2) {
      setState(prevState => ({
        ...prevState,
        hscPercentage: ''
      }));
    }
  };


  const handleKeyPressSsc = (event) => {
    if (event.key === 'Backspace' && state.sscPercentage.length === 2) {
      setState(prevState => ({
        ...prevState,
        sscPercentage: ''
      }));
    }
  };

  const handleKeyPressExp = (event) => {
    if (event.key === 'Backspace' && state.experienceInYears.length === 2) {
      setState(prevState => ({
        ...prevState,
        experienceInYears: ''
      }));
    }
  };


  const handleKeyPressTeam = (event) => {
    if (event.key === 'Backspace' && state.team.length === 2) {
      setState(prevState => ({
        ...prevState,
        team: ''
      }));
    }
  };

  //try wheather you can make number handling in that commented code or not otherwise we have created individual function for handling the numbers problem

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Backspace') {
  //     setState(prevState => {
  //       switch (event.target.name) {
  //         case "pgPercentage":
  //           ({ ...prevState, pgPercentage: '' });
  //         case "graduationPercentage":
  //           ({ ...prevState, graduationPercentage: '' });
  //       }
  //     }
  //     )
  //   }
  // };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value, loading: true });
    // }
  };

  let handleChangeArray = (e) => {
    let { name, value } = e.target;
    setState(prevState => {
      if (!Array.isArray(prevState[name])) {
        console.error(`State does not contain an array with name ${name}`);
        return prevState;
      }
      const newArray = value.split(',');
      return {
        ...prevState,
        [name]: newArray
      };
    });
  };


  let handleNavigate = () => {
    navigate("/")
    setIsLoggedIn(!isLoggedIn)
  }
  const downloadPDF = async (e) => {
    e.preventDefault()

    html2canvas(ref.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ imageCompression: false });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });


    let resp = await fetch(`http://localhost:5000/addUser`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await resp.json()
    if (resp.ok) {
      console.log(result)
    }
    if (!resp.ok) {
      console.log(resp.error)
    }
    // setState({
    //   name: "",
    //   email: "",
    //   age: "",
    //   password: ""
    // })
    // navigate("/read")


  };
  return (
    <div className='w-[65%] h-[100%]  p-5 overflow-y-auto border-r-2' id='homeLeftDiv'>
      <button className='inline-block p-2' onClick={handleNavigate}><IoChevronBackCircleSharp className='text-2xl text-blue-600' /></button>
      <h1 className='font-medium text-2xl text-center pb-5 text-blue-500'>Fill the following form</h1>
      <div>
        <form action="" >
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>About</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>

                  <div>
                    <label htmlFor="">Select your photo</label>
                    <input type="file" name='img' onChange={handleImage} className='w-[95%]' />
                  </div>
                  <article className='w-[100%] flex' id='nameInputField' >
                    <input type="text" placeholder='Your name'
                      value={state.studentName}
                      name='studentName'
                      onChange={handleChangeString}
                    />
                    <input type="text" placeholder='Designation'
                      value={state.workingAs}
                      name='workingAs'
                      onChange={handleChangeString} />
                  </article>
                  <textarea id="" cols="75" rows="5" placeholder='About you' className='border-[1px] border-black ms-2 rounded w-[100%] p-1'
                    value={state.aboutSession}
                    name='aboutSession'
                    onChange={handleChange}
                  ></textarea>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Qualification</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>

                  <div>
                    {/* 
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>Post Graduation</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className='flex'>
                            <input
                              type="text"
                              placeholder='Enter your post graduation percentages'
                              value={state.pgPercentage}
                              name='pgPercentage'
                              onChange={handleChangeNumber}
                              onKeyDown={handleKeyPressPg}
                              className='w-[45%]'
                            />
                            <input
                              type="date"
                              placeholder='select post graduation passout year'
                              value={state.pgYearOfPassout}
                              name='pgYearOfPassout'
                              onChange={handleChange}
                              className='w-[45%]'
                            />
                          </div>
                          <div className='flex'>
                            <input
                              type="text"
                              placeholder='Enter your post graduation university'
                              value={state.pgUniversity}
                              name='pgUniversity'
                              onChange={handleChangeString}
                              className='w-[45%]'
                            />
                            <input
                              type="text"
                              placeholder='Enter your post graduation stream'
                              value={state.pgStream}
                              name='pgStream'
                              onChange={handleChangeString}
                              className='w-[45%]'
                            />
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion> */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>Graduation</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className='flex'>
                            <input
                              type="text"
                              placeholder='Percentage'
                              value={state.graduationPercentage}
                              name='graduationPercentage'
                              onChange={handleChangeNumber}
                              onKeyDown={handleKeyPressGrad}
                              className='w-[45%]'

                            />
                            <label htmlFor="hscYear" className='inline w-[20%] text-gray-400 pt-3'>Passout year : </label>
                            <input
                              type="date"
                              placeholder='passout year'
                              value={state.graduationYearOfPassout}
                              name='graduationYearOfPassout'
                              onChange={handleChange}
                              className='w-[45%] text-gray-400'

                            />
                          </div>
                          <div className='flex'>
                            <input
                              type="text"
                              placeholder='University'
                              value={state.graduationUniversity}
                              name='graduationUniversity'
                              onChange={handleChangeString}
                              className='w-[45%]'

                            />

                            <input
                              type="text"
                              placeholder='Stream'
                              value={state.graduationStream}
                              name='graduationStream'
                              onChange={handleChangeString}
                              className='w-[45%]'
                            />
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    {/* <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>Diploma</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className='flex'>
                            <input
                              type="text"
                              placeholder='Enter your diploma percentages'
                              value={state.diplomaPercentage}
                              name='diplomaPercentage'
                              onChange={handleChangeNumber}
                              onKeyDown={handleKeyPressDiploma}
                              className='w-[45%]'

                            />
                            <input
                              type="date"
                              placeholder='select diploma hsc passout year'
                              value={state.diplomaYearOfPassout}
                              name='diplomaYearOfPassout'
                              onChange={handleChange}
                              className='w-[45%]'

                            />
                          </div>
                          <div className='flex'>
                            <input
                              type="text"
                              placeholder='Enter your diploma university'
                              value={state.diplomaUniversity}
                              name='diplomaUniversity'
                              onChange={handleChangeString}
                              className='w-[45%]'

                            />
                            <input
                              type="text"
                              placeholder='Enter your diploma stream'
                              value={state.diplomaStream}
                              name='diplomaStream'
                              onChange={handleChangeString}
                              className='w-[45%]'

                            />
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion> */}


                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>Diploma/12th</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className='flex'>
                            <input
                              type="text"
                              placeholder='Percentage'
                              value={state.hscPercentage}
                              name='hscPercentage'
                              onChange={handleChangeNumber}
                              onKeyDown={handleKeyPresshsc}
                              className='w-[45%]'
                            />
                            <input
                              type="text"
                              placeholder='University'
                              value={state.hscBoard}
                              name='hscBoard'
                              onChange={handleChangeString}
                              className='w-[45%]'
                            />

                          </div>
                          <label htmlFor="hscYear" className='inline w-[50%] text-gray-400 ps-5'>Passout year : </label>
                          <input
                            type="date"
                            placeholder='Passout year'
                            value={state.hscYearOfPassout}
                            name='hscYearOfPassout'
                            onChange={handleChange}
                            className='w-[50%] inline text-gray-400'

                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography>10th</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className='flex'>
                            <input
                              type="text"
                              placeholder='Percentage'
                              value={state.sscPercentage}
                              name='sscPercentage'
                              onChange={handleChangeNumber}
                              onKeyDown={handleKeyPressSsc}
                              className='w-[45%]'

                            />
                            <input
                              type="text"
                              placeholder='University'
                              value={state.sscBoard}
                              name='sscBoard'
                              onChange={handleChangeString}
                              className='w-[45%]'

                            />

                          </div>
                          <label htmlFor="hscYear" className='inline w-[50%] text-gray-400 ps-5'>Passout year : </label>
                          <input
                            type="date"
                            placeholder='Passout year'
                            value={state.sscYearOfPassout}
                            name='sscYearOfPassout'
                            onChange={handleChange}
                            className='w-[50%] inline text-gray-400'

                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>




            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Personal Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className='flex'>
                    <input type="email" placeholder='Email Id'
                      value={state.email}
                      name='email'
                      onChange={handleChange}
                      className='w-[45%]'

                    />
                    <input type="text" placeholder='Contact number'
                      value={state.phoneNo}
                      name='phoneNo'
                      onChange={handleChangePhone}
                      className='w-[45%]'

                    />
                  </div>
                  <div className='flex'>
                    <input type="text"
                      placeholder='Hobbies'
                      value={state.otherSkills}
                      name='otherSkills'
                      onChange={handleChangeArray}
                      className='w-[45%]'

                    />
                    <input type="text" placeholder='Address'
                      value={state.address}
                      name='address'
                      onChange={handleChange}
                      className='w-[45%]'
                    />
                  </div>

                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Social Media</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className='flex'>
                    <input type="text"
                      placeholder='LinkedIn id'
                      value={state.linkedIn}
                      name='linkedIn'
                      onChange={handleChange}
                      className='w-[45%]'

                    />
                    <input type="text"
                      placeholder='Facebook id'
                      value={state.facebook}
                      name='facebook'
                      onChange={handleChange}
                      className='w-[45%]'

                    />
                  </div>
                  <div className='flex'>
                    <input type="text"
                      placeholder='Twitter id'
                      value={state.twitter}
                      name='twitter'
                      onChange={handleChange}
                      className='w-[45%]'

                    />
                    <input type="text"
                      placeholder='Instagram id'
                      value={state.instagram}
                      name='instagram'
                      onChange={handleChange}
                      className='w-[45%]'

                    />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* 
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Hobbies</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <input type="text"
                    placeholder='Enter your hobbies'
                    value={state.otherSkills}
                    name='hardSkills'
                    onChange={handleChangeArray}
                  />
                </Typography>
              </AccordionDetails>
            </Accordion> */}


            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Technical Skills</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>

                  <div className='flex'>
                    <input
                      type="text"
                      placeholder='Programming languages '
                      value={state.programmingLang}
                      name='programmingLang'
                      onChange={handleChangeArray}
                      className='w-[45%]'
                    />

                    {/* <input
                      type="text"
                      placeholder='Enter web technologies'
                      value={state.webTech}
                      name='webTech'
                      onChange={handleChangeArray}
                      className='w-[45%]'
                    /> */}
                  </div>
                  <div className='flex'>
                    <input
                      type="text"
                      placeholder='Libraries and frameworks'
                      value={state.librariesFrameworks}
                      name='librariesFrameworks'
                      onChange={handleChangeArray}
                      className='w-[45%]'

                    />

                    {/* <input
                      type="text"
                      placeholder='Enter j2ee technologies'
                      value={state.j2eeTech}
                      name='j2eeTech'
                      onChange={handleChangeArray}
                      className='w-[45%]'
                    /> */}
                  </div>
                  <div className='flex'>
                    <input
                      type="text"
                      placeholder='Tools and utilities'
                      value={state.toolsUtilities}
                      name='toolsUtilities'
                      onChange={handleChangeArray}
                      className='w-[45%]'
                    />
                    {/* 
                    <input
                      type="text"
                      placeholder='Enter other technologies'
                      value={state.otherTechnologies}
                      name='otherTechnologies'
                      onChange={handleChangeArray}
                      className='w-[45%]'

                    /> */}
                  </div>
                  {/* <div className='flex'>
                    <input
                      type="text"
                      placeholder='Enter version control tools'
                      value={state.versionControl}
                      name='versionControl'
                      onChange={handleChangeArray}
                      className='w-[45%]'

                    />
                    <input
                      type="text"
                      placeholder='Enter web/application servers'
                      value={state.webAppServer}
                      name='webAppServer'
                      onChange={handleChangeArray}
                      className='w-[45%]'

                    />
                  </div> */}
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className='flex'>
                    <input
                      type="text"
                      placeholder='Company name'
                      value={state.companyName}
                      name='companyName'
                      onChange={handleChange}
                      className='w-[45%]'

                    />
                    <input
                      type="text"
                      placeholder='Years of experience'
                      value={state.experienceInYears}
                      name='experienceInYears'
                      onChange={handleChangeNumber}
                      onKeyDown={handleKeyPressExp}
                      className='w-[45%]'

                    />
                  </div>
                  <input
                    type="text"
                    placeholder='Key responsibilities'
                    value={state.keyResponsibility}
                    name='keyResponsibility'
                    onChange={handleChangeArray}
                    className='w-[95%]'

                  />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Project</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {/* projects */}
                  <article>
                    <div className='flex'>
                      <input
                        type="text"
                        placeholder='Project name'
                        value={state.projectName}
                        name='projectName'
                        onChange={handleChange}
                        className='w-[45%]'

                      />
                      <input
                        type="text"
                        placeholder='Description'
                        value={state.description}
                        name='description'
                        onChange={handleChange}
                        className='w-[45%]'

                      />
                    </div>
                    <div className='flex'>
                      <input
                        type="text"
                        placeholder='Technologies used'
                        value={state.technologiesUsed}
                        name='technologiesUsed'
                        onChange={handleChangeArray}
                        className='w-[45%]'

                      />
                      <input
                        type="text"
                        placeholder='Team size'
                        value={state.team}
                        name='team'
                        onChange={handleChangeNumber}
                        onKeyDown={handleKeyPressTeam}
                        className='w-[45%]'

                      />
                    </div>
                  </article>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Other Achivements</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <input
                    type="text"
                    placeholder='Achivements'
                    value={state.achivements}
                    name='achivements'
                    onChange={handleChange}
                    className='w-[95%]'
                  />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* <input
            type="text"
            placeholder='Enter your soft skills'
            value={state.softSkills}
            name='softSkills'
            onChange={handleChangeArray}
          /> */}
          <button onClick={downloadPDF} className='w-[100%] bg-green-700 mt-2 p-2'>Download Resume as PDF</button>
        </form>
      </div>
    </div>
  )
}

export default forwardRef(HomeLeft)