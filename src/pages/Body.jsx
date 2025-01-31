import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
const Body = () => {
  const location = useLocation();
  return (
    <>
    <AnimatePresence>
    <NavBar />
    <Outlet location = {location}/>
    </AnimatePresence>
   
    </>
  )
}

export default Body