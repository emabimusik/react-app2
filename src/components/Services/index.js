import React  from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {useTranslation} from 'react-i18next';
import { 
    ServicesCard,
    ServicesContainer,
    ServicesP,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesWrapper,
} from './ServicesElements';

const Services = () => {
    const {t} = useTranslation();
 return(
    <ServicesContainer id='services'>
        <ServicesH1> Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                    <ServicesH2>{t('header1-service')}</ServicesH2>
                    <ServicesP>{t('title1-service')}</ServicesP>
                
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                    <ServicesH2>{t('header2-service')}</ServicesH2>
                    <ServicesP> {t('title2-service')}</ServicesP>
               
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                    <ServicesH2>{t('header3-service')}</ServicesH2>
                    <ServicesP>{t('title3-service')}</ServicesP>
             
            </ServicesCard>
            
        </ServicesWrapper>

    </ServicesContainer>
 )


}

export default Services;