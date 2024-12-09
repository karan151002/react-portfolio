import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Projects from '../pages/Project/Project'
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails'
import { AnimatePresence } from 'framer-motion'

const Animatedroutes = () => {

    const location = useLocation()
    console.log(location);
    

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/project/:title' element={<ProjectDetails />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Animatedroutes