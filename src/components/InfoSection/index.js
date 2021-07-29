import React from 'react';
import { Button } from '../ButtonElement';
//import ImageOne from '../../images/svg-1.svg';
//import { useTranslation } from 'react-i18next';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    TextWrapper
} from './InfoElements';

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2

})=>{
   //const { t } = useTranslation();

return(
    <>
<InfoContainer lightBg={lightBg} id={id}>
    <InfoWrapper>
        <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                  { headLine}
                </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to = "home"
                   smooth={true}
                   duration={500}
                   spy="True"
                   exact={true}
                   offset={-80}
                   primary= {primary ? 1 : 0}
                   dark={dark ? 1 : 0}
                   dark2={dark2 ?1 : 0}
                  
                  >  { buttonLabel } </Button>
                </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              <Img  src={img} alt={alt}/>
            </ImgWrap>
            </Column2>
        </InfoRow>
    </InfoWrapper>
</InfoContainer>
  </>  
);
}

export default InfoSection