import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
//import Video from '../../videos/video.mp4'
import HeroContainer from '../components/HeroSection';

import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo,homeObjThree} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import {useTranslation} from 'react-i18next';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)

    }; 
    const {t,i18n} = useTranslation();
    return ( <>
        <Sidebar isOpen = { isOpen } toggle = { toggle }/> 
        <NavBar  toggle = { toggle }/> 
        <HeroContainer/>
        <InfoSection {...homeObjOne} />
        <Services/>
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
         <Footer/>
          </>
    )
}

export default Home;