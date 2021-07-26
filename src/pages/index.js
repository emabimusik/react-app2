import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
//import Video from '../../videos/video.mp4'
import HeroContainer from '../components/HeroSection';

import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)

    }
    return ( <>
        <Sidebar isOpen = { isOpen }toggle = { toggle }/> 
        <NavBar toggle = { toggle }/> 
        <HeroContainer/>
        <InfoSection {...homeObjOne} />
        <Services/>
        <InfoSection {...homeObjTwo} />
         <Footer/>
          </>
    )
}

export default Home;