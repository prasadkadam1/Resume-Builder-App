import React, { useContext } from 'react'
import landingPageImg from "../assets/images/12085316_20944142.svg"
import Button from '@mui/material/Button';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { myContext } from '../MyContext';
import Navbar from './Navbar';
const LandingPage = () => {
  const navigate = useNavigate()
  let data = useContext(myContext)
  let { isLoggedIn, setIsLoggedIn } = data
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <main className='flex h-[90vh]' id='landingMain'>
        <section className='w-[59%] h-[100%] bg-[#ffffff] flex justify-center items-center' id='landingImg'><img src={landingPageImg} alt="" /></section>
        <section className='w-[41%] h-[90%] p-10 bg-[#ffffff] flex flex-col justify-around items-center' id='landingSection' >
          <h1 className='font-semibold text-5xl' id='landingH1'>We give a sleek resume design for every industry</h1>
          <p className='font-medium text-lg ' id='landingPara'>Whether you're applying for a role as a creative director, accountant or your first internship, We are providing Free Resume Maker that takes the heavy lifting out of resume design</p>
          <div className='w-[85%] flex justify-around' id='imgContainerButtons'>
            <Button id='getButton' variant="contained" color='success' className='w-52' onClick={
              () => {
                navigate("/home")
                setIsLoggedIn(!isLoggedIn)
              }}>Get Started Now!</Button>
            {/* <Link to="/home">Get Started Now!</Link> */}
            <Button variant="contained" color='secondary' className='w-40' id='learnButton'>Learn More</Button>
          </div>
        </section>

      </main>
      {<Outlet />}
    </div >
  )
}
export default LandingPage