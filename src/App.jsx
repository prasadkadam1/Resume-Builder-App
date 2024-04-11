import React from 'react'
// import LandingPage from './components/LandingPage'
// import { RouterProvider } from 'react-router-dom'
// import MyRoutes from './MyRoutes';
// import { RouterProvider } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import MyContext, { myContext } from './MyContext';
const App = () => {
  return (
    <MyContext>
      <MyRoutes></MyRoutes>
    </MyContext>
  )
}

export default App