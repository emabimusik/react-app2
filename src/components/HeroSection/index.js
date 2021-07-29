import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4';
import {useTranslation} from 'react-i18next';
import {
    HeroContainer,
    VideoBg,
    HeroBg,
    HeroH1,
    HeroBtnWrapper,
    HeroP,
    HeroContent,
    ArrowForward,
    ArrowRight,
} from './HeroElement';

const HeroSection = () => {
    const {t,i18n} = useTranslation();
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
  
    return ( <HeroContainer>
        <HeroBg >
        <VideoBg autoPlay loop muted src = { Video }type = 'video/mp4' >
        </VideoBg> </HeroBg> <HeroContent >
        <HeroH1>{t('heroH1')}. </HeroH1> <HeroP>
        {t('heroP')} </HeroP> <HeroBtnWrapper>
        <Button to = 'signup'
        onMouseEnter = { onHover }
        onMouseLeave = { onHover }
        primary = 'true'
        dark = 'true' >
        {t('heroB')} { hover ? < ArrowForward / > : < ArrowRight / > } </Button > </HeroBtnWrapper> </HeroContent>

        </HeroContainer>
    )

}


export default HeroSection;