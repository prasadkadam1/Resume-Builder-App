import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import qspidersLogo from "../assets/images/62269827_2463791223672175_5155771461872386048_n.png"
import { myContext } from '../MyContext';
const Navbar = () => {
  const navigate = useNavigate()
  let handleLogo = () => {
    navigate("/")
    setIsLoggedIn(!isLoggedIn)
  }
  let data = useContext(myContext)
  // console.log(data);
  let { isLoggedIn, setIsLoggedIn } = data
  return (
    <div>
      <header className='w-[100%] h-[10vh] bg-[#ffffff]'>
        <nav className='flex' id='navbarMain'>
          <section className='w-[20%] h-[10vh] flex items-center justify-center'><Button onClick={handleLogo}>
            PRASAD
            {/* <img src={qspidersLogo} alt="" width="70px" /> */}
          </Button></section>
          <section className='w-[75%] h-[10vh] flex justify-around items-center'>
            {/* <Button>How it works</Button> */}
            {/* <Button id='menuButton'>Templates</Button> */}
            {/* <Button>Testimonial</Button>
            <Button>Blog</Button> */}
            {/* <Button id='menuButton'>{isLoggedIn ? "Logout" : "Login"}</Button> */}
            {/* <Button variant="contained"
              style={{ display: isLoggedIn ? "none" : "block" }}
              onClick={() => {
                navigate("/home")
                setIsLoggedIn(!isLoggedIn)

              }}
              id='createButton'>Create for free</Button> */}
          </section>
        </nav>
      </header>
      {<Outlet />}
    </div>
  )
}

export default Navbar